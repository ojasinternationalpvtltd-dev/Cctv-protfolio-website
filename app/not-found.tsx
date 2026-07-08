import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-6xl">This signal is offline.</h1>
      <p className="mt-5 max-w-2xl text-slate-300">
        The page you are looking for may have moved. Return home to continue exploring Ojas International solutions.
      </p>
      <Button asChild href="/" className="mt-8">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>
    </section>
  );
}
