import React from "react";
import { experienceData } from "@/data/experience";
import { FadeIn } from "@/components/motion/FadeIn";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 md:py-28 bg-brand-canvas border-t border-brand-lavender/30 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-3">
            <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
            <span>Experience</span>
          </div>
          <h2
            id="experience-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-indigo tracking-tight mb-4"
          >
            Work Experience &amp; Leadership
          </h2>
          <p className="text-base text-brand-darkText mb-14 max-w-2xl">
            Professional machine learning internship, formal project management training,
            and organizational leadership roles.
          </p>
        </FadeIn>

        {/* Creamy Editorial Timeline */}
        <div className="relative border-l border-brand-lavender/35 ml-3 sm:ml-4 space-y-10">
          {experienceData.map((item, idx) => (
            <div key={`${item.organization}-${idx}`} className="relative pl-7 sm:pl-9">
              {/* Timeline Marker */}
              <div
                className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand-strawberry border-4 border-brand-canvas shadow-xs"
                aria-hidden="true"
              />

              <FadeIn delay={idx * 70}>
                <div className="p-6 sm:p-7 rounded-xl bg-white border border-brand-lavender/30 hover:border-brand-strawberry/40 transition-colors shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-strawberry">
                      {item.period}
                    </span>
                    {item.mode && (
                      <span className="text-[11px] font-semibold text-brand-darkText bg-brand-canvas border border-brand-lavender/25 px-2.5 py-0.5 rounded-full">
                        {item.mode}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-brand-indigo tracking-tight mb-1">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-brand-darkText mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-brand-strawberry shrink-0" />
                    <span>{item.organization}</span>
                  </p>

                  <p className="text-sm sm:text-base text-brand-darkText leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {item.tools && item.tools.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-lavender/20">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs text-brand-indigo bg-brand-canvas border border-brand-lavender/25 rounded-md px-2.5 py-1"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
