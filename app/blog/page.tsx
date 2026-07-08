import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/site";

export const metadata = {
  title: "Blog",
  description: "Security surveillance, networking, access control and smart infrastructure articles from Ojas International."
};

export default function BlogPage() {
  const [featured, ...latest] = blogPosts;
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <MotionSection className="pt-32 md:pt-40">
      <SectionHeading eyebrow="Blog" title="Practical insights for safer and better connected spaces." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
        <Link href={`/blog/${featured.slug}`} className="glass group grid overflow-hidden rounded-2xl lg:grid-cols-2">
          <div className="relative min-h-72">
            <Image src={featured.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Featured Post</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">{featured.title}</h2>
            <p className="mt-4 text-slate-400">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">Read Article <ArrowUpRight className="h-4 w-4" /></span>
          </div>
        </Link>
        <aside className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-500">
            <Search className="h-4 w-4" /> Search articles
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-white">Categories</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {categories.map((category) => <span key={category} className="rounded-full bg-cyan/10 px-4 py-2 text-sm text-cyan">{category}</span>)}
          </div>
          <h3 className="mt-8 font-display text-xl font-semibold text-white">Newsletter</h3>
          <p className="mt-3 text-sm text-slate-400">Get security and infrastructure tips from Ojas International.</p>
        </aside>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {latest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="glass group overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={post.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{post.category}</p>
              <h2 className="mt-3 font-display text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {[1, 2, 3].map((page) => <span key={page} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-slate-300">{page}</span>)}
      </div>
    </MotionSection>
  );
}
