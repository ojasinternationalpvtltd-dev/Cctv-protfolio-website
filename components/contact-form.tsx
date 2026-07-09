"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { services } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/input";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  companyName: z.string().optional(),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  requiredService: z.string().min(1, "Please choose a service."),
  projectDetails: z.string().min(10, "Please share a few project details."),
  budget: z.string().optional(),
  message: z.string().min(10, "Please add a message.")
});

type FormValues = z.infer<typeof schema>;
const formSubmitEndpoint = "https://formsubmit.co/ojasinternationalpvtltd@gmail.com";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const params = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (params.get("sent") === "1") {
      setStatus("success");
    }

    if (params.get("focus") === "consultation" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      formRef.current.classList.add("form-highlight");
      window.setTimeout(() => formRef.current?.classList.remove("form-highlight"), 1800);
    }
  }, [params]);

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    const subject = `New site inspection request: ${values.requiredService}`;
    const form = document.createElement("form");
    form.method = "POST";
    form.action = formSubmitEndpoint;
    form.style.display = "none";

    const payload: Record<string, string> = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
      _next: `${window.location.origin}/contact?sent=1`,
      name: values.fullName,
      company: values.companyName || "N/A",
      phone: values.phone,
      email: values.email,
      _replyto: values.email,
      service: values.requiredService,
      budget: values.budget || "N/A",
      projectDetails: values.projectDetails,
      message: values.message
    };

    Object.entries(payload).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    reset();
    form.submit();
  }

  const fields = [
    { name: "fullName", label: "Full Name", placeholder: "Your name" },
    { name: "companyName", label: "Company Name", placeholder: "Company or organization" },
    { name: "phone", label: "Phone", placeholder: "+977 ..." },
    { name: "email", label: "Email", placeholder: "name@example.com" },
    { name: "budget", label: "Budget (Optional)", placeholder: "Estimated budget" }
  ] as const;

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-5 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm text-slate-300">
            {field.label}
            <Input placeholder={field.placeholder} {...register(field.name)} />
            {errors[field.name] ? <span className="text-xs text-red-300">{errors[field.name]?.message}</span> : null}
          </label>
        ))}
        <label className="grid gap-2 text-sm text-slate-300">
          Required Service
          <Select defaultValue="" {...register("requiredService")}>
            <option value="" disabled className="bg-midnight">Select a service</option>
            {services.slice(0, compact ? 8 : services.length).map((service) => (
              <option key={service.slug} value={service.title} className="bg-midnight">
                {service.title}
              </option>
            ))}
          </Select>
          {errors.requiredService ? <span className="text-xs text-red-300">{errors.requiredService.message}</span> : null}
        </label>
      </div>
      <div className="mt-4 grid gap-4">
        <label className="grid gap-2 text-sm text-slate-300">
          Project Details
          <Textarea placeholder="Property type, location, approximate scale and timeline" {...register("projectDetails")} />
          {errors.projectDetails ? <span className="text-xs text-red-300">{errors.projectDetails.message}</span> : null}
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Message
          <Textarea placeholder="Tell us what you want to secure, connect or upgrade" {...register("message")} />
          {errors.message ? <span className="text-xs text-red-300">{errors.message.message}</span> : null}
        </label>
      </div>
      <Button type="submit" className="mt-6 w-full md:w-auto" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Submit Request"}
      </Button>
      {status === "success" ? <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200">Thank you. Your free site inspection request has been received.</p> : null}
      {status === "error" ? <p className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">Something went wrong. Please try again or contact us directly.</p> : null}
    </form>
  );
}
