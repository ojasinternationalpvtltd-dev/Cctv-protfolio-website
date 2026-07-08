import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { company, services } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan">
              <ShieldCheck className="h-6 w-6 text-white" />
            </span>
            <span className="font-display text-lg font-bold text-white">{company.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            Premium security surveillance, networking, smart access and IT infrastructure solutions built for dependable performance.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Mail].map((Icon, index) => (
              <a key={index} href={index === 2 ? `mailto:${company.email}` : "#"} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:border-cyan hover:text-cyan" aria-label="Social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            {["About", "Services", "Blog", "Contact", "Privacy Policy", "Terms & Conditions"].map((item) => (
              <Link key={item} href={item.includes("Privacy") || item.includes("Terms") ? "#" : `/${item.toLowerCase()}`} className="hover:text-cyan">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Services</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            {services.slice(0, 7).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-cyan">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-slate-400">
            <p className="flex gap-3"><MapPin className="h-5 w-5 text-cyan" />{company.address}</p>
            <a className="flex gap-3 hover:text-cyan" href={`tel:${company.primaryPhone}`}><Phone className="h-5 w-5 text-cyan" />{company.phone}</a>
            <a className="flex gap-3 hover:text-cyan" href={`mailto:${company.email}`}><Mail className="h-5 w-5 text-cyan" />{company.email}</a>
          </div>
          <Button asChild href="/contact?focus=consultation" className="mt-6">
            Free Site Inspection
          </Button>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
