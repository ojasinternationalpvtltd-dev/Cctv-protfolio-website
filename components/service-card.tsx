import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/site";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="glass group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-cyan">
      <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
        <Image src={service.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ink/70 text-cyan backdrop-blur">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{service.category}</p>
        <h3 className="mt-3 font-display text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
        <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white">
          Read More <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
