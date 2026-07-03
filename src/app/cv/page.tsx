import type { Metadata } from "next";
import { CvToolbar } from "@/components/cv-toolbar";
import { PhoneReveal } from "@/components/phone-reveal";
import {
  personal,
  summary,
  skills,
  experiences,
  projects,
  education,
} from "@/content/profile";

export const metadata: Metadata = {
  title: `CV — ${personal.name}`,
  description: `Hồ sơ năng lực của ${personal.name}, ${personal.role}.`,
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 border-b border-border pb-1 text-sm font-bold uppercase tracking-wide text-primary">
      {children}
    </h2>
  );
}

export default function CvPage() {
  return (
    <>
      <CvToolbar />

      <main className="mx-auto max-w-3xl px-5 py-8 sm:px-8 print:max-w-none print:px-0 print:py-0">
        {/* Header */}
        <header className="mb-5">
          <h1 className="text-2xl font-bold">{personal.name}</h1>
          <p className="text-base font-semibold text-primary">
            {personal.role} · {personal.roleSub}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {personal.email} · <PhoneReveal /> · {personal.location}
          </p>
          <p className="text-sm text-muted-foreground">
            github.com/takeisan24 · LinkedIn: Tuấn Anh Vũ
          </p>
        </header>

        {/* Tóm tắt */}
        <section className="mb-5">
          <H>Tóm tắt</H>
          <p className="text-sm leading-relaxed">{summary}</p>
        </section>

        {/* Kỹ năng */}
        <section className="mb-5">
          <H>Kỹ năng kỹ thuật</H>
          <ul className="space-y-1 text-sm">
            {skills.map((g) => (
              <li key={g.group}>
                <span className="font-semibold">{g.group}:</span>{" "}
                {g.items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        {/* Kinh nghiệm */}
        <section className="mb-5">
          <H>Kinh nghiệm</H>
          <div className="space-y-3">
            {experiences.map((exp) => (
              <div key={exp.org}>
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-bold">{exp.role}</p>
                  <p className="shrink-0 text-xs text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <p className="text-sm italic text-muted-foreground">
                  {exp.org}
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Dự án */}
        <section className="mb-5">
          <H>Dự án nổi bật</H>
          <div className="space-y-2">
            {projects.map((p) => (
              <div key={p.slug}>
                <p className="text-sm">
                  <span className="font-bold">{p.name}</span>
                  <span className="text-muted-foreground"> — {p.tagline}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {p.highlights.join(" · ")} | {p.tech.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Học vấn */}
        <section>
          <H>Học vấn</H>
          <div className="flex items-baseline justify-between gap-2 text-sm">
            <p>
              <span className="font-bold">{education.school}</span> —{" "}
              {education.major}
            </p>
            <p className="shrink-0 text-xs text-muted-foreground">
              {education.period}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{education.gpa}</p>
        </section>
      </main>
    </>
  );
}
