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
    <h2 className="mb-2 border-b border-pink-200 pb-1 text-sm font-bold uppercase tracking-wide text-pink-600">
      {children}
    </h2>
  );
}

export default function CvPage() {
  return (
    <>
      <CvToolbar altHref="/cv-design" altLabel="Bản thiết kế" pdfType="ats" />

      {/* Tài liệu nền trắng cố định (không phụ thuộc theme) */}
      <div className="bg-neutral-100 py-8 print:bg-white print:py-0">
        <main className="mx-auto max-w-3xl bg-white p-8 text-neutral-800 shadow-xl sm:p-10 print:max-w-none print:p-0 print:shadow-none">
          {/* Header */}
          <header className="mb-5">
            <h1 className="text-2xl font-bold text-neutral-900">
              {personal.name}
            </h1>
            <p className="text-base font-semibold text-pink-600">
              {personal.role} · {personal.roleSub}
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              {personal.email} · <PhoneReveal /> · {personal.location}
            </p>
            <p className="text-sm text-neutral-600">
              github.com/takeisan24 · LinkedIn: Tuấn Anh Vũ
            </p>
            <p className="mt-1 text-sm font-medium text-pink-600">
              {personal.availability}
            </p>
          </header>

          {/* Tóm tắt */}
          <section className="mb-5">
            <H>Tóm tắt</H>
            <p className="text-sm leading-relaxed text-neutral-700">{summary}</p>
          </section>

          {/* Kỹ năng */}
          <section className="mb-5">
            <H>Kỹ năng kỹ thuật</H>
            <ul className="space-y-1 text-sm text-neutral-700">
              {skills.map((g) => (
                <li key={g.group}>
                  <span className="font-semibold text-neutral-900">
                    {g.group}:
                  </span>{" "}
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
                    <p className="text-sm font-bold text-neutral-900">
                      {exp.role}
                    </p>
                    <p className="shrink-0 text-xs text-neutral-500">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-sm italic text-neutral-600">{exp.org}</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-neutral-700">
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
                  <p className="text-sm text-neutral-700">
                    <span className="font-bold text-neutral-900">{p.name}</span>
                    <span className="text-neutral-500"> — {p.tagline}</span>
                  </p>
                  <p className="text-xs text-neutral-500">
                    {p.highlights.join(" · ")} | {p.tech.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Học vấn */}
          <section>
            <H>Học vấn</H>
            <div className="flex items-baseline justify-between gap-2 text-sm text-neutral-700">
              <p>
                <span className="font-bold text-neutral-900">
                  {education.school}
                </span>{" "}
                — {education.major}
              </p>
              <p className="shrink-0 text-xs text-neutral-500">
                {education.period}
              </p>
            </div>
            {education.gpa && (
              <p className="text-sm text-neutral-600">{education.gpa}</p>
            )}
            {education.thesis && (
              <p className="text-sm text-neutral-600">{education.thesis}</p>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
