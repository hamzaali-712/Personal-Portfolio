"use client";

import React from "react";
import Image from "next/image";
import { CertificateItem } from "@/types";
import { Dialog } from "@/components/ui/Dialog";
import { ExternalLink, Award } from "lucide-react";

export interface CertificatePreviewProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificatePreview({
  certificate,
  isOpen,
  onClose,
}: CertificatePreviewProps) {
  if (!certificate) return null;

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={certificate.name}
      className="max-w-3xl"
    >
      <div className="space-y-5">
        {/* Full Image Display */}
        {certificate.image ? (
          <div className="relative w-full h-[360px] sm:h-[460px] bg-brand-canvas rounded-xl overflow-hidden border border-brand-lavender/30 flex items-center justify-center">
            <Image
              src={certificate.image}
              alt={certificate.name}
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-48 bg-brand-canvas rounded-xl flex items-center justify-center text-brand-darkText border border-brand-lavender/30">
            <Award className="w-8 h-8 text-brand-strawberry mr-2" />
            <span>Official Credential Verified</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-brand-lavender/25">
          <div>
            <p className="text-base font-bold text-brand-indigo">
              {certificate.issuer}
            </p>
            {certificate.date && (
              <p className="text-xs text-brand-darkText mt-0.5">
                Issue Date: {certificate.date}
              </p>
            )}
            {certificate.credentialId && (
              <p className="text-xs font-mono text-brand-darkText mt-0.5">
                Credential ID: {certificate.credentialId}
              </p>
            )}
          </div>

          {certificate.verifyUrl && (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-strawberry hover:bg-brand-flag text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-sm shrink-0"
            >
              <span>Verify Official Credential</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Dialog>
  );
}
