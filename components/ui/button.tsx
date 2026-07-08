import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  asChild?: false;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = {
  asChild: true;
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  asChild,
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps | LinkButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-ink",
    variant === "primary" && "bg-gradient-to-r from-electric to-cyan text-white shadow-glow hover:scale-[1.02] hover:shadow-cyan",
    variant === "secondary" && "border border-cyan/35 bg-white/5 text-white hover:border-cyan hover:bg-cyan/10",
    variant === "ghost" && "text-slate-200 hover:bg-white/8 hover:text-white",
    className
  );

  if (asChild) {
    return (
      <Link className={classes} href={(props as LinkButtonProps).href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
