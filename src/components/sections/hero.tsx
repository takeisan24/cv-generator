import Link from "next/link";
import { ArrowRight, Github, Linkedin, MapPin, FileText } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { personal } from "@/content/profile";

export function Hero() {
  return (
    <section className="sakura-glow relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Sẵn sàng cho cơ hội mới
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
    </section>
  );
}
