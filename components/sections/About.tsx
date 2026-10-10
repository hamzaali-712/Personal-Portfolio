import React from "react";
import { profileData } from "@/data/profile";
import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 bg-white border-y border-brand-lavender/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-3">
            <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
            <span>About</span>
          </div>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-indigo tracking-tight mb-12"
          >
            Background &amp; Direction
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Body */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-brand-darkText leading-relaxed">
            <FadeIn delay={100}>
              <p>
                I am currently a Software Engineering student at{" "}
                <span className="font-semibold text-brand-indigo">
                  COMSATS University Islamabad, Wah Campus
                </span>
                . My technical curiosity focuses on software engineering, applied machine
                learning, web systems, and fundamental cybersecurity practices.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p>
                Rather than collecting buzzwords, I prioritize building functional systems:
                structuring clean code in Python and C++, evaluating real-world data in ML
                pipelines during my internship at FlyRank AI, and collaborating with cross-functional peers under competition
                deadlines like HACKDATA V2 (where our team earned <span className="font-semibold text-brand-strawberry">1st Runner Up</span>).
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p>
                Beyond individual engineering tasks, I value transparent communication,
                organized execution, and shared team outcomes—whether in remote internships,
                university initiatives, or civic community drives.
              </p>
            </FadeIn>
          </div>

          {/* Snapshot Column */}
          <div className="lg:col-span-5">
            <FadeIn delay={150} direction="left">
              <div className="bg-brand-canvas/60 rounded-xl p-6 sm:p-8 border border-brand-lavender/30 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-indigo/70 pb-3 border-b border-brand-lavender/25 mb-4">
                  Profile Snapshot
                </h3>
                <dl className="divide-y divide-brand-lavender/20 text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-brand-darkText">Degree</dt>
                    <dd className="font-medium text-brand-indigo text-right">
                      {profileData.degree}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-brand-darkText">Institution</dt>
                    <dd className="font-medium text-brand-indigo text-right">
                      COMSATS Wah Campus
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-brand-darkText">Academic Status</dt>
                    <dd className="font-bold text-brand-strawberry text-right">
                      CGPA {profileData.cgpa}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-brand-darkText">Primary Focus</dt>
                    <dd className="font-medium text-brand-indigo text-right">
                      Applied AI/ML &amp; Software Dev
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-brand-darkText">Direct Inquiries</dt>
                    <dd className="font-medium text-brand-strawberry text-right truncate">
                      <a href={`mailto:${profileData.email}`} className="hover:underline">
                        {profileData.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
