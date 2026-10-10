import React from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Activities } from "@/components/sections/Activities";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <PageShell>
      {/* 01 — Hero / Introduction */}
      <Hero />

      {/* 02 — About */}
      <About />

      {/* 03 — Experience */}
      <Experience />

      {/* 04 — Featured Projects */}
      <Projects />

      {/* 05 — Skills & Technical Focus */}
      <Skills />

      {/* 06 — Education */}
      <Education />

      {/* 07 — Certifications & Credentials */}
      <Certifications />

      {/* 08 — Hackathons, Bootcamps, and Community */}
      <Activities />

      {/* 09 — Contact */}
      <Contact />
    </PageShell>
  );
}
