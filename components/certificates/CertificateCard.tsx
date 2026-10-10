"use client";

import React from "react";
import Image from "next/image";
import { CertificateItem } from "@/types";
import { ExternalLink, Eye, Award } from "lucide-react";

export interface CertificateCardProps {
  certificate: CertificateItem;
  onPreview?: (cert: CertificateItem) => void;
}

export function CertificateCard({ certificate, onPreview }: CertificateCardProps) {
  return (
    <div className="group rounded-xl bg-white border border-brand-lavender/30 hover:border-brand-strawberry/40 shadow-xs transition-all duration-200 flex flex-col justify-between overflow-hidden h-full">
      {/* Certificate Image Thumbnail */}
      {certificate.image ? (
        <div
          onClick={() => onPreview && onPreview(certificate)}
          className="relative w-full h-44 sm:h-48 bg-brand-canvas cursor-pointer overflow-hidden border-b border-brand-lavender/25"
        >
          <Image
            src={certificate.image}
            alt={certificate.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-brand-indigo/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
            <Eye className="w-4 h-4 text-white" />
            <span>Click to View Full Certificate</span>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-brand-canvas border-b border-brand-lavender/25 flex items-center gap-2 text-brand-strawberry">
          <Award className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-darkText">
            Verified Credential
          </span>
        </div>
      )}

      {/* Certificate Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-semibold text-brand-darkText">
              {certificate.issuer}
            </span>
            {certificate.date && (
              <span className="text-[11px] text-brand-darkText/70 font-medium">
                {certificate.date}
              </span>
            )}
          </div>

          <h4 className="text-base font-bold text-brand-indigo mb-2 leading-snug group-hover:text-brand-strawberry transition-colors">
            {certificate.name}
          </h4>

          {certificate.credentialId && (
            <p className="text-[11px] text-brand-darkText/70 font-mono truncate">
              ID: {certificate.credentialId}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3 border-t border-brand-lavender/20 flex items-center justify-between gap-2">
          {certificate.image && (
            <button
              type="button"
              onClick={() => onPreview && onPreview(certificate)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-indigo hover:text-brand-strawberry transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-strawberry rounded"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect</span>
            </button>
          )}

          {certificate.verifyUrl && (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${certificate.name} on official portal`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-strawberry hover:text-brand-flag transition-colors ml-auto focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-strawberry rounded"
            >
              <span>Verify Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
