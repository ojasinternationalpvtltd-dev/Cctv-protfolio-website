import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact Ojas International Pvt. Ltd. for security surveillance, networking and IT infrastructure consultations."
};

export default function ContactPage() {
  const info = [
    { icon: MapPin, label: "Office Address", value: company.address },
    { icon: Phone, label: "Phone", value: company.phone },
    { icon: Mail, label: "Email", value: company.email },
    { icon: Clock3, label: "Business Hours", value: company.hours }
  ];

  return (
    <MotionSection className="pt-32 md:pt-40">
      <SectionHeading eyebrow="Contact" title="Book a consultation for your security or networking project." text="Tell us about your property, goals and timeline. Ojas International will help you map the right solution." />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <ContactForm />
        <aside className="grid gap-5">
          {info.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="glass rounded-2xl p-6">
                <Icon className="h-6 w-6 text-cyan" />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                <p className="mt-2 font-semibold text-white">{item.value}</p>
              </div>
            );
          })}
          <a href={company.whatsapp} className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 font-semibold text-emerald-200">
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
          <div className="glass flex min-h-64 items-center justify-center rounded-2xl p-6 text-center text-slate-400">
            Google Maps location placeholder
          </div>
        </aside>
      </div>
    </MotionSection>
  );
}
