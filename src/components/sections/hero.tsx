import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, MapPin, FileText } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { personal } from "@/content/profile";

export function Hero() {
  return (
    <section className="sakura-glow relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Cột nội dung */}
          <div className="flex-1">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {personal.availability}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                {personal.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 text-xl font-semibold text-primary sm:text-2xl">
                {personal.role}{" "}
                <span className="font-mono text-sm font-normal text-muted-foreground">
                  · {personal.roleSub}
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {personal.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Xem dự án <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <FileText className="h-4 w-4" /> Xem / Tải CV
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {personal.location}
                </span>
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* Ảnh đại diện */}
          <Reveal delay={0.1} className="order-first lg:order-last">
            <div className="relative mx-auto w-44 shrink-0 sm:w-56 lg:w-72">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/30 shadow-2xl">
                <Image
                  src={personal.avatar}
                  alt={`Ảnh chân dung ${personal.name}`}
                  fill
                  sizes="(max-width: 1024px) 14rem, 18rem"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/15 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
