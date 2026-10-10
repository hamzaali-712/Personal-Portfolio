import React from "react";
import { ProjectItem } from "@/types";
import { ExternalLink } from "lucide-react";

export interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group p-6 sm:p-7 rounded-2xl bg-[#131627] border border-white/10 hover:border-brand-strawberry/50 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
      <div>
        {/* Top Header: Number and Category / Live Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-brand-lavender/60">
            {project.num}
          </span>
          {project.liveUrl ? (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/30 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>Live Demo</span>
            </span>
          ) : (
            project.category && (
              <span className="text-[11px] font-semibold text-brand-lavender bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                {project.category}
              </span>
            )
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-brand-strawberry transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-lavender leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-brand-platinum/90 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-xs font-semibold">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code of ${project.title} on GitHub`}
          className="inline-flex items-center gap-2 text-brand-lavender hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-strawberry rounded"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>Source Code</span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live deployed demo for ${project.title}`}
            className="inline-flex items-center gap-1.5 text-brand-strawberry hover:text-brand-flag transition-colors font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-strawberry rounded"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
