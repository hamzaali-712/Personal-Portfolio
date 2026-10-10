import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Trophy, Award, Users, MapPin, Sparkles } from "lucide-react";

export function Activities() {
  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="py-20 md:py-28 bg-brand-canvas border-t border-brand-lavender/30 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-3">
            <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
            <span>Hackathons &amp; Activities</span>
          </div>
          <h2
            id="activities-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-indigo tracking-tight mb-4"
          >
            Hackathons &amp; Community Impact
          </h2>
          <p className="text-base text-brand-darkText mb-12 max-w-2xl">
            Competitive hackathons, algorithmic coding competitions, and social contributions.
          </p>
        </FadeIn>

        {/* FEATURED PODIUM WINNER: HACKDATA V2 */}
        <FadeIn delay={60}>
          <div className="rounded-2xl bg-white border-2 border-brand-strawberry/40 p-7 sm:p-9 mb-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-strawberry/10 border border-brand-strawberry/30 text-brand-strawberry text-xs font-bold uppercase tracking-wider mb-4">
                  <Trophy className="w-4 h-4 text-brand-strawberry" />
                  <span>1st Runner Up — Podium Finish</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-indigo tracking-tight mb-3">
                  HACKDATA <span className="text-brand-strawberry">V2</span> Hackathon
                </h3>

                <p className="text-base text-brand-darkText leading-relaxed mb-6">
                  Intensive competitive AI and data science hackathon organized by Google Developer
                  Group On Campus (GDGoC), COMSATS Wah. Architected, built, and deployed an end-to-end
                  intelligent solution under deadline pressure, securing the{" "}
                  <strong className="text-brand-indigo font-bold">1st Runner Up</strong> podium trophy.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-brand-indigo">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-canvas border border-brand-lavender/30">
                    <Trophy className="w-4 h-4 text-brand-strawberry shrink-0" />
                    <span>1st Runner Up</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-canvas border border-brand-lavender/30">
                    <MapPin className="w-4 h-4 text-brand-darkText shrink-0" />
                    <span>COMSATS Wah</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-canvas border border-brand-lavender/30">
                    <Users className="w-4 h-4 text-brand-darkText shrink-0" />
                    <span>GDG on Campus</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-canvas border border-brand-lavender/30">
                    <Sparkles className="w-4 h-4 text-brand-strawberry shrink-0" />
                    <span>Build With AI</span>
                  </div>
                </div>
              </div>

              {/* Highlights Pillar */}
              <div className="lg:col-span-4 bg-brand-canvas/70 rounded-xl p-5 border border-brand-lavender/30 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-indigo block">
                  Key Milestones
                </span>
                <ul className="space-y-2.5 text-xs text-brand-darkText font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-strawberry font-bold">✦</span>
                    <span>Idea to fully working deployed AI application in 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-strawberry font-bold">✦</span>
                    <span>Evaluated and judged by industry &amp; faculty AI panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-strawberry font-bold">✦</span>
                    <span>Recognized for innovation, speed, and real-world utility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* OTHER COMPETITIONS & HACKATHONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Mega Code War 4.0 */}
          <FadeIn delay={100}>
            <div className="p-6 rounded-xl bg-white border border-brand-lavender/30 hover:border-brand-strawberry/40 transition-colors shadow-xs h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-strawberry bg-brand-strawberry/10 border border-brand-strawberry/20 px-2 py-0.5 rounded-md">
                    Coding Excellence
                  </span>
                  <span className="text-xs text-brand-darkText/70">May 2026</span>
                </div>
                <h4 className="text-lg font-bold text-brand-indigo mb-1">Mega Code War 4.0</h4>
                <p className="text-xs font-medium text-brand-darkText mb-3">HITECH University Taxila</p>
                <p className="text-sm text-brand-darkText leading-relaxed">
                  Certificate of Achievement for exhibiting innovation, teamwork, and coding
                  excellence in competitive problem-solving under tight time limits.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* HACKDATA V1 */}
          <FadeIn delay={150}>
            <div className="p-6 rounded-xl bg-white border border-brand-lavender/30 hover:border-brand-strawberry/40 transition-colors shadow-xs h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-md">
                    Hackathon
                  </span>
                  <span className="text-xs text-brand-darkText/70">April 2025</span>
                </div>
                <h4 className="text-lg font-bold text-brand-indigo mb-1">HACKDATA V1</h4>
                <p className="text-xs font-medium text-brand-darkText mb-3">GDGoC COMSATS Wah</p>
                <p className="text-sm text-brand-darkText leading-relaxed">
                  Intensive AI &amp; data science hackathon. Ideated and built an end-to-end AI system
                  as part of team Hack-Catchers under time constraints.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* DYLP Global Hackathon */}
          <FadeIn delay={200}>
            <div className="p-6 rounded-xl bg-white border border-brand-lavender/30 hover:border-brand-strawberry/40 transition-colors shadow-xs h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-darkText bg-brand-canvas border border-brand-lavender/30 px-2 py-0.5 rounded-md">
                    International
                  </span>
                  <span className="text-xs text-brand-darkText/70">2026</span>
                </div>
                <h4 className="text-lg font-bold text-brand-indigo mb-1">Global Hackathon Vibe Coding</h4>
                <p className="text-xs font-medium text-brand-darkText mb-3">
                  Digital Youth Leadership Program
                </p>
                <p className="text-sm text-brand-darkText leading-relaxed">
                  Participated in international hackathon exploring rapid AI-augmented coding, prompt
                  engineering, and modern agile deployment workflows.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
