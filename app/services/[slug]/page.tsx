import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.description, images: [service.image] }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <MotionSection className="pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{service.category}</p>
            <h1 className="mt-4 font-display text-5xl font-bold text-white md:text-7xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{service.description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild href="/contact?focus=consultation">Free Site Inspection</Button>
              <Button asChild href="/services" variant="secondary">All Services</Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image src={service.image} alt="" fill className="object-cover" />
            <div className="absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink/75 text-cyan backdrop-blur">
              <Icon className="h-8 w-8" />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoBlock title="Key Features" items={service.features} />
          <InfoBlock title="Benefits" items={service.benefits} />
          <InfoBlock title="Applications" items={service.applications} />
          <InfoBlock title="Equipment Used" items={service.equipment} />
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading eyebrow="Process" title="A clear installation workflow from planning to handover." />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {service.process.map((step, index) => (
            <div key={step} className="glass rounded-2xl p-6">
              <p className="font-display text-3xl font-bold text-cyan">0{index + 1}</p>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading eyebrow="FAQs" title={`Questions about ${service.title}`} />
        <div className="mt-10 grid gap-4">
          {service.faqs.map((faq) => (
            <div key={faq.question} className="glass rounded-2xl p-6">
              <h3 className="flex gap-3 font-display text-xl font-semibold text-white"><HelpCircle className="h-6 w-6 text-cyan" />{faq.question}</h3>
              <p className="mt-3 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading eyebrow="Gallery" title="Premium deployment visuals." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <Image src={`/images/project-${item}.svg`} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading eyebrow="Related Services" title="Complete the system with matching services." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((item) => <ServiceCard key={item.slug} service={item} />)}
        </div>
      </MotionSection>

      <MotionSection>
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Free Site Inspection" title="Plan your installation with Ojas International." text="Share your project details and our team will respond with the next best step." />
            <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-cyan">Open full contact page</Link>
          </div>
          <ContactForm compact />
        </div>
      </MotionSection>
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="font-display text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <p key={item} className="flex gap-3 text-sm text-slate-300">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
