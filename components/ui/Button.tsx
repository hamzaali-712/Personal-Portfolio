import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strawberry focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl";

    const variants = {
      primary:
        "bg-brand-strawberry text-white hover:bg-brand-flag active:bg-brand-flag shadow-glow",
      secondary:
        "bg-[#131627] text-white border border-white/10 hover:border-white/20 active:bg-[#1A1F36]",
      outline:
        "border border-white/15 text-white bg-transparent hover:border-white/30 hover:bg-white/5",
      ghost:
        "text-brand-lavender hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
