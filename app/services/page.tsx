import { ServiceCard } from "@/components/service-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site";

export const metadata = {
  title: "Services",
  description: "Explore CCTV, networking, fiber optic, access control, biometric, server installation and AMC services."
};

export default function ServicesPage() {
  const categories = ["Security", "Networking", "Infrastructure", "Maintenance"] as const;

  return (
    <MotionSection className="pt-32 md:pt-40">
      <SectionHeading eyebrow="Services" title="Security, networking and infrastructure services for modern properties." text="Choose a complete solution or start with one priority area. Every service can be planned, installed and supported by Ojas International." />
      <div className="mt-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <span key={category} className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">{category}</span>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
      </div>
    </MotionSection>
  );
}
