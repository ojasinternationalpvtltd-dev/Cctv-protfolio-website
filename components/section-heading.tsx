import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, text, centered }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{text}</p> : null}
    </div>
  );
}
