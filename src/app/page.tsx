import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { personal, education } from "@/content/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  url: "https://vutuananh.vercel.app",
  jobTitle: personal.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hà Nội",
    addressCountry: "VN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.school,
  },
  sameAs: [personal.links.github, personal.links.linkedin],
  knowsAbout: [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Supabase",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
