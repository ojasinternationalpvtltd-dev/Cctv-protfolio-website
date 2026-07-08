import Image from "next/image";
import { Award, Eye, Gem, HeartHandshake, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { stats, whyChoose } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Learn about Ojas International Pvt. Ltd., our mission, vision, values and security technology expertise."
};

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Mission", text: "Deliver intelligent, reliable and maintainable security and networking systems." },
    { icon: Eye, title: "Vision", text: "Become a trusted technology partner for safer and better connected communities." },
    { icon: HeartHandshake, title: "Core Values", text: "Integrity, clean workmanship, practical advice, responsiveness and long-term value." }
  ];

  return (
    <>
      <MotionSection className="pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="About Us" title="Premium security and networking expertise with a service-first mindset." text="Ojas International Pvt. Ltd. helps homeowners, institutions and businesses protect people, assets and operations through smart surveillance, connectivity and access solutions." />
            <Button asChild href="/contact?focus=consultation" className="mt-8">Talk to Our Team</Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image src="/images/about-office.svg" alt="Modern security operations workspace" fill className="object-cover" />
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass rounded-2xl p-6">
                <Icon className="h-8 w-8 text-cyan" />
                <h2 className="mt-5 font-display text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection>
        <div className="glass rounded-3xl p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Owner's Message</p>
          <blockquote className="mt-5 font-display text-2xl font-semibold leading-snug text-white md:text-4xl">
            "Our goal is simple: recommend what genuinely works, install it beautifully and support clients with responsibility."
          </blockquote>
          <p className="mt-5 text-slate-300">Kriti, Owner, Ojas International Pvt. Ltd.</p>
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading centered eyebrow="Achievements" title="Experience that shows up in every installation." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading eyebrow="Team & Certifications" title="A practical team backed by trusted standards." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {["Project Consultants", "Installation Engineers", "Support Specialists"].map((role) => (
            <div key={role} className="glass rounded-2xl p-6">
              <Users className="h-8 w-8 text-cyan" />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{role}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Focused on site surveys, quality deployment, testing, documentation and ongoing customer support.</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Product Training", "Safety Practices", "Structured Cabling Standards"].map((certificate) => (
            <div key={certificate} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <Award className="h-5 w-5 text-cyan" />
              <span className="text-sm text-slate-200">{certificate}</span>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <SectionHeading centered eyebrow="Why Choose Us" title="Premium planning, careful installation and reliable aftercare." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass rounded-2xl p-6">
                <Icon className="h-7 w-7 text-cyan" />
                <h3 className="mt-4 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </MotionSection>
    </>
  );
}
