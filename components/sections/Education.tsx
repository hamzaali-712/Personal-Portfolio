import React from "react";
import { educationData } from "@/data/education";
import { FadeIn } from "@/components/motion/FadeIn";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 md:py-28 bg-brand-canvas border-t border-brand-lavender/30 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-3">
            <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
            <span>Education</span>
          </div>
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-indigo tracking-tight mb-4"
          >
            Academic Foundation
          </h2>
          <p className="text-base text-brand-darkText mb-12 max-w-2xl">
            Formal qualifications, current software engineering degree, and secondary education.
          </p>
        </FadeIn>

        <div className="space-y-5">
          {educationData.map((item, idx) => (
            <FadeIn key={item.degree} delay={idx * 70}>
              <div
                className={`p-6 sm:p-7 rounded-xl border transition-all duration-200 ${
                  item.isCurrent
                    ? "bg-white border-brand-strawberry/40 shadow-xs"
                    : "bg-white border-brand-lavender/30 hover:border-brand-lavender/60 shadow-xs"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        item.isCurrent
                          ? "bg-brand-strawberry/10 text-brand-strawberry"
                          : "bg-brand-canvas text-brand-darkText"
                      }`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-indigo tracking-tight">
                      {item.degree}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-semibold text-brand-darkText mb-3 sm:ml-10">
                  {item.institution}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:ml-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-strawberry bg-brand-strawberry/10 border border-brand-strawberry/20 px-2.5 py-1 rounded-md">
                    {item.grade}
                  </span>
                  <span className="text-xs text-brand-darkText/70 font-medium">
                    {item.period}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
