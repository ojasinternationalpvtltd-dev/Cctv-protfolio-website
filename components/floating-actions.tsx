"use client";

import Link from "next/link";
import { ArrowUp, CalendarCheck, MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <Link
        href="/contact?focus=consultation"
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan px-4 py-3 text-sm font-semibold text-white shadow-glow"
      >
        <CalendarCheck className="h-4 w-4" />
        <span className="hidden sm:inline">Free Site Inspection</span>
      </Link>
      <div className="flex gap-3">
        <a href={company.whatsapp} className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/15 text-emerald-300 shadow-lg" aria-label="WhatsApp">
          <MessageCircle className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
