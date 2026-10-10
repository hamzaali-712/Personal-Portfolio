"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ArrowRight, Mail, Trophy, Award, GraduationCap, GitBranch } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  const stats = [
    {
      label: "HACKDATA V2",
      value: "1st Runner Up",
      icon: Trophy,
      highlight: true,
    },
    {
      label: "Academic Record",
      value: "3.41 / 4.00 CGPA",
      icon: GraduationCap,
    },
    {
      label: "Verified Credentials",
      value: "13 Certifications",
      icon: Award,
    },
    {
      label: "Key Repositories",
      value: "10 Main & Collab",
      icon: GitBranch,
    },
  ];

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:py-32 overflow-hidden bg-brand-canvas"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <FadeIn delay={50}>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-4">
                <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
                <span>Software Engineering Student</span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-brand-indigo tracking-tight leading-[1.05] mb-5">
                Hamza <span className="text-brand-strawberry">Ali</span>
              </h1>
            </FadeIn>

            <FadeIn delay={150}>
              <p className="text-lg sm:text-xl font-normal text-brand-darkText leading-relaxed max-w-xl mb-8">
                Software Engineering student at{" "}
                <span className="text-brand-indigo font-semibold">
                  COMSATS University Islamabad, Wah Campus
                </span>
                . Building practical software solutions with Python, applied AI/ML workflows,
                and cybersecurity fundamentals.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-brand-strawberry hover:bg-brand-flag text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strawberry"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-brand-indigo font-semibold text-sm px-6 py-3 rounded-md border border-brand-lavender/40 hover:border-brand-indigo hover:bg-brand-canvas/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strawberry"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-darkText hover:text-brand-indigo transition-colors ml-1"
                >
                  <span>GitHub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Clean Profile Picture (No artificial overlay badge) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={150} direction="left">
              <div className="relative group">
                <div
                  className="absolute -inset-2.5 rounded-2xl border border-brand-strawberry/25 pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                  aria-hidden="true"
                />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white">
                  <Image
                    src="/images/profile/ProfilePicture.jpg"
                    alt="Hamza Ali"
                    width={320}
                    height={320}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Hero Highlights & Stats Grid */}
        <FadeIn delay={250}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-brand-lavender/30">
            {stats.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.label}
                  className={`p-4 rounded-xl border transition-colors ${
                    st.highlight
                      ? "bg-white border-brand-strawberry/40 shadow-xs"
                      : "bg-white/70 border-brand-lavender/30"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon
                      className={`w-4 h-4 ${
                        st.highlight ? "text-brand-strawberry" : "text-brand-darkText"
                      }`}
                    />
                    <span className="text-[11px] font-bold text-brand-darkText uppercase tracking-wider">
                      {st.label}
                    </span>
                  </div>
                  <p
                    className={`text-base font-bold tracking-tight ${
                      st.highlight ? "text-brand-strawberry" : "text-brand-indigo"
                    }`}
                  >
                    {st.value}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
