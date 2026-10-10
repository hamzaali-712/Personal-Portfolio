"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { FadeIn } from "@/components/motion/FadeIn";
import { Mail, Check, Copy, ExternalLink, Send } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      subject || "Portfolio Contact Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${name || "Visitor"}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 bg-brand-canvas border-t border-brand-lavender/30 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-strawberry mb-3">
            <span className="w-5 h-[1.5px] bg-brand-strawberry" aria-hidden="true" />
            <span>Connect</span>
          </div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-indigo tracking-tight mb-4"
          >
            Let&apos;s Build Something Real
          </h2>
          <p className="text-base text-brand-darkText mb-14 max-w-2xl">
            Open to software engineering internships, research collaborations, hackathon teams,
            and conversations on applied AI. I typically respond within 24 hours.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Methods */}
          <div className="lg:col-span-5 space-y-5">
            <FadeIn delay={100}>
              <div className="p-6 rounded-xl bg-white border border-brand-lavender/30 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-darkText">
                  Direct Inquiries
                </span>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-base sm:text-lg font-bold text-brand-indigo hover:text-brand-strawberry transition-colors truncate"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopy}
                    className="p-2 text-brand-darkText hover:text-brand-indigo rounded-lg bg-brand-canvas hover:bg-brand-lavender/25 transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-green-600 font-semibold mt-2">
                    ✓ Email address copied to clipboard
                  </p>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="p-6 rounded-xl bg-white border border-brand-lavender/30 shadow-xs space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-darkText">
                  Verified Social Channels
                </span>
                <div className="space-y-3">
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-brand-canvas border border-brand-lavender/30 text-brand-indigo hover:border-brand-strawberry transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <div>
                        <p className="text-sm font-bold">GitHub</p>
                        <p className="text-xs text-brand-darkText">github.com/hamzaali-712</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-brand-darkText" />
                  </a>

                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-brand-canvas border border-brand-lavender/30 text-brand-indigo hover:border-brand-strawberry transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 fill-current text-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <div>
                        <p className="text-sm font-bold">LinkedIn</p>
                        <p className="text-xs text-brand-darkText">linkedin.com/in/hamza-ali-k712</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-brand-darkText" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Mail Compose Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={120} direction="left">
              <form
                onSubmit={handleSendMail}
                className="p-7 sm:p-8 rounded-xl bg-white border border-brand-lavender/30 shadow-xs space-y-4"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-darkText mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-2.5 text-sm bg-brand-canvas border border-brand-lavender/40 rounded-lg text-brand-indigo placeholder-brand-darkText/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strawberry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-darkText mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry / Internship / Collaboration"
                    className="w-full px-4 py-2.5 text-sm bg-brand-canvas border border-brand-lavender/40 rounded-lg text-brand-indigo placeholder-brand-darkText/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strawberry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-darkText mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write details of your project or opportunity..."
                    className="w-full px-4 py-2.5 text-sm bg-brand-canvas border border-brand-lavender/40 rounded-lg text-brand-indigo placeholder-brand-darkText/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strawberry"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-strawberry hover:bg-brand-flag text-white font-bold text-sm px-7 py-3 rounded-lg transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strawberry"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
