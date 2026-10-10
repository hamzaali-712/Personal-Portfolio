import React from "react";

export interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
            activeCategory === cat
              ? "bg-brand-strawberry text-white"
              : "bg-white text-brand-darkText border border-brand-lavender/30 hover:border-brand-indigo"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
