"use client";

import React, { useState } from "react";
import { certificatesData } from "@/data/certificates";
import { CertificateItem } from "@/types";
import { FadeIn } from "@/components/motion/FadeIn";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { CertificatePreview } from "@/components/certificates/CertificatePreview";

interface CertificateGroup {
  id: string;
  title: string;
  description: string;
  category: CertificateItem["category"];
}

const certificateGroups: CertificateGroup[] = [
  {
    id: "technical",
    title: "Technical & Applied AI Specializations",
    description:
      "Verified specializations in Python, machine learning mathematics, GenAI analytics, and cyber defense.",
    category: "technical",
  },
  {
    id: "internship",
    title: "Internship Credentials",
    description:
      "Formal verification from industry internships across machine learning engineering and project management.",
    category: "internship",
  },
  {
    id: "hackathon",
    title: "Hackathons & Competitive Credentials",
    description:
      "Podium finish and competitive achievement awards from verified university and international hackathons.",
    category: "hackathon",
  },
  {
    id: "management",
    title: "Project Management Foundations",
    description:
      "Google-certified foundations in agile workflows, project initiation, and lifecycle execution.",
    category: "management",
  },
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { label: "All Credentials (13)", value: "all" },
    { label: "Technical & AI (5)", value: "technical" },
    { label: "Internships (2)", value: "internship" },
    { label: "Hackathons (4)", value: "hackathon" },
    { label: "Project Management (2)", value: "management" },
  ];

  const visibleGroups = certificateGroups.filter((group) => {
    if (activeFilter === "all") return true;
    return group.category === activeFilter;
  });

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-20 md:py-28 bg-brand-canvas border-t border-brand-lavender/30 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-3">
            <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
            <span>Credentials</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2
                id="certifications-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-indigo tracking-tight"
              >
                Licenses &amp; Certifications
              </h2>
              <p className="text-base text-brand-darkText mt-2 max-w-2xl">
                13 industry credentials, technical specializations, and competitive hackathon awards with
                verifiable proof. Click any card to inspect the full certificate.
              </p>
            </div>
            <div className="text-xs font-semibold text-brand-strawberry bg-brand-strawberry/10 border border-brand-strawberry/25 px-3 py-1 rounded-full shrink-0">
              13 Verified Credentials
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strawberry ${
                  activeFilter === tab.value
                    ? "bg-brand-strawberry text-white shadow-xs"
                    : "bg-white text-brand-darkText border border-brand-lavender/30 hover:border-brand-indigo hover:text-brand-indigo"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Separated Credential Groups with Explicit Headings */}
        <div className="space-y-16">
          {visibleGroups.map((group) => {
            const certs = certificatesData.filter((c) => c.category === group.category);
            if (certs.length === 0) return null;

            return (
              <div key={group.id} className="space-y-6">
                <FadeIn>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-brand-lavender/30 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-brand-indigo tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-xs text-brand-darkText mt-0.5">
                        {group.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-medium text-brand-darkText/70 shrink-0">
                      {certs.length} {certs.length === 1 ? "entry" : "entries"}
                    </span>
                  </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certs.map((cert) => (
                    <FadeIn key={cert.name}>
                      <CertificateCard
                        certificate={cert}
                        onPreview={(c) => setSelectedCert(c)}
                      />
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Preview */}
        <CertificatePreview
          certificate={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </section>
  );
}
