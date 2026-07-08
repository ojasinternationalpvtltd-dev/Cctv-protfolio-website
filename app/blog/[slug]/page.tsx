import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-section";
import { blogPosts } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, images: [post.image] } };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <MotionSection className="pt-32 md:pt-40">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{post.category}</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-6xl">{post.title}</h1>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
          <span>{post.author}</span><span>{post.date}</span><span>{post.readTime}</span>
        </div>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
          <Image src={post.image} alt="" fill className="object-cover" priority />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="glass h-fit rounded-2xl p-5">
            <h2 className="font-display text-lg font-semibold text-white">Table of Contents</h2>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              <a href="#overview">Overview</a>
              <a href="#planning">Planning</a>
              <a href="#next-step">Next Step</a>
            </div>
          </aside>
          <div className="max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={paragraph} id={index === 0 ? "overview" : index === 1 ? "planning" : "next-step"} className="mb-6 text-lg leading-8 text-slate-300">{paragraph}</p>
            ))}
            <div className="mt-8 flex gap-3">
              {[Facebook, Linkedin, MessageCircle].map((Icon, index) => (
                <button key={index} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan" aria-label="Share">
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-display text-2xl font-semibold text-white">Comments</h2>
              <p className="mt-2 text-sm text-slate-400">Comments can be connected later through a CMS or community platform.</p>
            </div>
            <div className="mt-10 rounded-2xl border border-cyan/30 bg-cyan/10 p-6">
              <h2 className="font-display text-2xl font-semibold text-white">Need help with a project?</h2>
              <p className="mt-2 text-slate-300">Ojas International can survey, design and install the right solution for your property.</p>
              <Button asChild href="/contact?focus=consultation" className="mt-5">Free Site Inspection</Button>
            </div>
          </div>
        </div>
      </article>
      <div className="mx-auto mt-16 max-w-5xl">
        <h2 className="font-display text-3xl font-semibold text-white">Related Posts</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan">{item.category}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
