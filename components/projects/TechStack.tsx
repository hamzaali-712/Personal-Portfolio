import React from "react";

export interface TechStackProps {
  stack: string[];
}

export function TechStack({ stack }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((item) => (
        <span
          key={item}
          className="text-xs bg-brand-platinum text-brand-darkText px-2 py-0.5 rounded border border-brand-lavender/20"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
