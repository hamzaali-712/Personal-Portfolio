"use client";

import React from "react";
import { mainProjects, contributionProjects } from "@/data/projects";
import { FadeIn } from "@/components/motion/FadeIn";
import { ExternalLink, GitFork } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 bg-brand-canvas border-t border-brand-lavender/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-3">
            <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
            <span>Repository Directory</span>
          </div>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-indigo tracking-tight mb-4"
          >
            Projects &amp; Repositories
          </h2>
          <p className="text-base text-brand-darkText mb-12 max-w-2xl">
            Selected application repositories and team collaborations spanning applied AI/ML,
            cybersecurity, and software systems.
          </p>
        </FadeIn>

        {/* ============================================================
            A. Main Projects and Application Repositories
            ============================================================ */}
        <div className="mb-14">
          <FadeIn>
            <div className="flex items-center justify-between pb-3 border-b border-brand-lavender/30 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-indigo">
                A. Main Projects and Application Repositories
              </h3>
              <span className="text-xs font-semibold text-brand-strawberry bg-brand-strawberry/10 border border-brand-strawberry/20 px-2.5 py-0.5 rounded-full">
                {mainProjects.length} Repositories
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProjects.map((p, idx) => (
              <FadeIn key={p.name} delay={idx * 50}>
                <div className="p-6 rounded-xl bg-white border border-brand-lavender/30 hover:border-brand-strawberry/40 transition-colors shadow-xs flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-brand-darkText/60">
                        {p.num}
                      </span>
                      <span className="text-[11px] font-semibold text-brand-darkText bg-brand-canvas px-2.5 py-0.5 rounded-full border border-brand-lavender/25">
                        Main Build
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-brand-indigo mb-2 tracking-tight">
                      {p.name}
                    </h4>

                    <p className="text-sm text-brand-darkText leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {p.tech && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium text-brand-darkText bg-brand-canvas px-2.5 py-0.5 rounded border border-brand-lavender/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-brand-lavender/20">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-strawberry hover:text-brand-flag transition-colors"
                    >
                      <span>{p.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ============================================================
            B. Contribution Repositories — Worked on with Teammates
            ============================================================ */}
        <div>
          <FadeIn>
            <div className="pb-3 border-b border-brand-lavender/30 mb-6">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-brand-indigo">
                  B. Contribution Repositories — Worked on with Teammates
                </h3>
                <span className="text-xs font-semibold text-brand-indigo bg-brand-lavender/15 border border-brand-lavender/30 px-2.5 py-0.5 rounded-full">
                  {contributionProjects.length} Repositories
                </span>
              </div>
              <p className="text-xs text-brand-darkText">
                These links point to repositories owned by your collaborators, rather than your own
                GitHub account. The links alone do not establish which commits or pull requests you
                contributed.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributionProjects.map((p, idx) => (
              <FadeIn key={p.name} delay={idx * 50}>
                <div className="p-6 rounded-xl bg-white border border-brand-lavender/30 hover:border-brand-lavender/60 transition-colors shadow-xs flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-brand-darkText/60">
                        {p.num}
                      </span>
                      {p.owner && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-darkText bg-brand-canvas px-2.5 py-0.5 rounded-full border border-brand-lavender/25">
                          <GitFork className="w-3 h-3 text-brand-lavender" />
                          <span>Owner: {p.owner}</span>
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-brand-indigo mb-2 tracking-tight">
                      {p.name}
                    </h4>

                    <p className="text-sm text-brand-darkText leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {p.tech && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium text-brand-darkText bg-brand-canvas px-2.5 py-0.5 rounded border border-brand-lavender/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-brand-lavender/20">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-strawberry hover:text-brand-flag transition-colors"
                    >
                      <span>{p.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
