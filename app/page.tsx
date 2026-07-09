import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CalendarCheck, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { brands, industries, projects, services, stats, testimonials, whyChoose } from "@/data/site";

export default function HomePage() {
  const heroVisuals = [
    { src: "/images/service-cctv.svg", title: "CCTV Surveillance", className: "lg:col-span-2" },
    { src: "/images/service-networking.svg", title: "Networking" },
    { src: "access-control.webp", title: "Access Control" },
    { src: "/images/service-fiber.svg", title: "Fiber Optic" }
  ];

  return (
    <>
      <section className="relative overflow-hidden px-6 pt-32 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">
              <Sparkles className="h-4 w-4" /> Premium Security & IT Infrastructure
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-tight text-white md:text-7xl">
              Advanced Security Surveillance & Networking Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Delivering intelligent security systems and reliable networking infrastructure for homes, businesses, industries and institutions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild href="/services">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild href="/contact?focus=consultation" variant="secondary">
                <CalendarCheck className="h-4 w-4" /> Free Site Inspection
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-5">
                  <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[520px]">
            <div className="absolute inset-0 rounded-[2rem] border border-cyan/20 bg-radial-grid blur-2xl" />
            <div className="relative grid h-full min-h-[520px] grid-cols-2 gap-4 rounded-[2rem] border border-yellow-400/20 bg-midnight/65 p-4 shadow-glow backdrop-blur">
              {heroVisuals.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-ink/70 ${item.className ?? ""}`}
                >
                  <Image src={item.src} alt={item.title} fill priority={index === 0} className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/65 to-transparent p-4">
                    <p className="font-display text-sm font-semibold text-yellow-200 md:text-lg">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MotionSection>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About Ojas"
            title="A technology partner for safer, smarter and better connected spaces."
            text="Ojas International Pvt. Ltd. designs, installs and supports security surveillance, networking, access control, fiber and smart infrastructure systems with a practical, premium approach."
          />
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {["Site-first planning", "Clean installation", "Reliable products", "Ongoing support"].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl bg-white/[0.04] p-4 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  {item}
                </div>
              ))}
            </div>
            <Button asChild href="/about" className="mt-6">
              Learn More
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading centered eyebrow="Why Choose Us" title="Built for confidence from survey to support." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Services" title="Complete security, networking and smart infrastructure solutions." />
          <Button asChild href="/services" variant="secondary">View All Services</Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading centered eyebrow="Industries" title="Trusted across high-demand environments." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {industries.map((industry) => (
            <div key={industry} className="glass flex items-center gap-3 rounded-2xl p-4 text-sm font-medium text-slate-200">
              <Building2 className="h-5 w-5 text-cyan" /> {industry}
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading eyebrow="Featured Projects" title="Recent deployments with clean execution." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.name} className="glass overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/10]">
                <Image src={`/images/project-${index + 1}.svg`} alt="" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan">{project.type}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm text-slate-400">{project.location} - {project.date}</p>
                <p className="mt-2 text-sm text-slate-300">{project.services}</p>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="py-12">
        <div className="glass overflow-hidden rounded-2xl p-6">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Brands We Deal In</p>
          <div className="brand-marquee overflow-hidden">
            <div className="brand-marquee-track flex gap-4">
              {[...brands, ...brands].map((brand, index) => (
                <div key={`${brand}-${index}`} className="min-w-40 rounded-xl border border-yellow-400/20 bg-white/[0.04] px-5 py-5 text-center font-display text-sm font-semibold text-slate-200 shadow-glow">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading centered eyebrow="Testimonials" title="Clients value neat work, practical advice and dependable support." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass rounded-2xl p-6">
              <p className="text-lg leading-8 text-slate-200">"{item.quote}"</p>
              <p className="mt-6 font-semibold text-white">{item.name}</p>
              <p className="text-sm text-cyan">{item.company}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-to-r from-electric/40 to-cyan/20 p-8 text-center shadow-glow md:p-14">
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Secure Your Property with Ojas International Pvt. Ltd.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">Get a clear, practical recommendation for CCTV, networking, access control, fiber or smart infrastructure.</p>
          <Button asChild href="/contact?focus=consultation" className="mt-8 bg-white text-electric hover:text-white">
            Free Site Inspection
          </Button>
        </div>
      </MotionSection>
    </>
  );
}
