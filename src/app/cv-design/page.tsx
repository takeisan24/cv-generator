import type { Metadata } from "next";
import Image from "next/image";
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
  title: `CV (bản thiết kế) — ${personal.name}`,
  description: `Hồ sơ năng lực của ${personal.name}.`,
  robots: { index: false }, // bản phụ, không cần Google index
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-avoid-break">
      <h2 className="mb-2 border-b border-pink-200 pb-1 text-xs font-bold uppercase tracking-wider text-pink-600">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function CvDesignPage() {
  return (
    <>
      <CvToolbar altHref="/cv" altLabel="Bản ATS" />

      <div className="cv-design bg-neutral-200 py-8 print:bg-white print:py-0">
        <div className="mx-auto max-w-[820px] bg-white text-neutral-800 shadow-xl print:shadow-none">
          {/* Header */}
          <header className="flex items-center justify-between gap-6 border-b-4 border-pink-500 px-10 pb-6 pt-10 print:px-8 print:pt-4">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900">
                {personal.name}
              </h1>
              <p className="mt-1 text-lg font-semibold text-pink-600">
                {personal.role}
              </p>
              <p className="text-sm text-neutral-500">{personal.roleSub}</p>
              <p className="mt-2 text-sm font-medium text-pink-600">
                {personal.availability}
              </p>
            </div>
            <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-lg border-2 border-pink-200">
              <Image
                src={personal.avatar}
                alt={`Ảnh ${personal.name}`}
                fill
                sizes="6rem"
                className="object-cover"
              />
            </div>
          </header>

          {/* Body: 2 cột */}
          <div className="flex flex-col gap-8 px-10 py-8 sm:flex-row print:px-8 print:py-6">
            {/* Sidebar */}
            <aside className="w-full shrink-0 space-y-6 sm:w-[35%]">
              <Section title="Liên hệ">
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>{personal.email}</li>
                  <li>
                    <PhoneReveal />
                  </li>
                  <li>{personal.location}</li>
                  <li>github.com/takeisan24</li>
                  <li>LinkedIn: Tuấn Anh Vũ</li>
                </ul>
              </Section>

              <Section title="Kỹ năng">
                <div className="space-y-2 text-sm">
                  {skills.map((g) => (
                    <div key={g.group}>
                      <p className="font-semibold text-neutral-800">{g.group}</p>
                      <p className="text-neutral-600">{g.items.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Học vấn">
                <p className="text-sm font-semibold text-neutral-800">
                  {education.school}
                </p>
                <p className="text-sm text-neutral-600">{education.major}</p>
                <p className="text-sm text-neutral-500">{education.period}</p>
              </Section>
            </aside>

            {/* Main */}
            <main className="flex-1 space-y-6">
              <Section title="Giới thiệu">
                <p className="text-sm leading-relaxed text-neutral-700">
                  {summary}
                </p>
              </Section>

              <Section title="Kinh nghiệm">
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <div key={exp.org} className="cv-avoid-break">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="text-sm font-bold text-neutral-900">
                          {exp.role}
                        </p>
                        <p className="shrink-0 text-xs text-neutral-500">
                          {exp.period}
                        </p>
                      </div>
                      <p className="text-sm font-medium italic text-pink-600">
                        {exp.org}
                      </p>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-neutral-700">
                        {exp.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Dự án nổi bật">
                <div className="space-y-3">
                  {projects.map((p) => (
                    <div key={p.slug} className="cv-avoid-break">
                      <p className="text-sm font-bold text-neutral-900">
                        {p.name}
                        <span className="font-normal text-neutral-500">
                          {" "}
                          — {p.tagline}
                        </span>
                      </p>
                      <p className="text-xs text-neutral-600">
                        {p.highlights.join(" · ")}
                      </p>
                      <p className="mt-0.5 text-xs text-neutral-400">
                        {p.tech.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
