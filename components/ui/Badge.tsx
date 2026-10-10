import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "subtle";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-white/5 text-brand-platinum border border-white/10",
    accent:
      "bg-brand-strawberry/15 text-brand-strawberry border border-brand-strawberry/30 font-bold",
    outline:
      "border border-white/20 text-brand-lavender bg-transparent",
    subtle:
      "bg-[#131627] text-brand-lavender border border-white/10 shadow-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
