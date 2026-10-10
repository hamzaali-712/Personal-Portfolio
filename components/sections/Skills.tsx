import React from "react";
import { skillCategories } from "@/data/skills";
import { FadeIn } from "@/components/motion/FadeIn";
import { Code2, AppWindow, Brain, Database, ShieldCheck } from "lucide-react";

export function Skills() {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "code":
        return <Code2 className="w-5 h-5 text-white" />;
      case "layout":
        return <AppWindow className="w-5 h-5 text-white" />;
      case "brain":
        return <Brain className="w-5 h-5 text-white" />;
      case "database":
        return <Database className="w-5 h-5 text-white" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5 text-white" />;
      default:
        return <Code2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 md:py-28 bg-brand-canvas border-t border-brand-lavender/30 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-3">
            <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
            <span>Technical Competencies</span>
          </div>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-indigo tracking-tight mb-4"
          >
            Skills &amp; Technical Stacks
          </h2>
          <p className="text-base text-brand-darkText mb-12 max-w-2xl">
            Verified programming languages, applied data science frameworks, databases, and developer tools.
          </p>
        </FadeIn>

        {/* Stacked 5 Rows matching Image 2 layout */}
        <div className="space-y-4">
          {skillCategories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 60}>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-lavender/30 hover:border-brand-strawberry/40 transition-colors shadow-xs">
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Dark rounded icon chip on the left matching image 2 */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-indigo flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {getIcon(cat.icon)}
                  </div>

                  {/* Title & Description & Skills */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-brand-indigo tracking-tight">
                      {cat.title}
                    </h3>
                    {cat.description && (
                      <p className="text-sm text-brand-darkText mt-0.5 mb-3 leading-relaxed">
                        {cat.description}
                      </p>
                    )}

                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-brand-indigo bg-brand-canvas px-2.5 py-1 rounded-md border border-brand-lavender/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
