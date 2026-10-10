"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface MotionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MotionWrapper({
  className,
  children,
  ...props
}: MotionWrapperProps) {
  return (
    <div className={cn("will-change-transform", className)} {...props}>
      {children}
    </div>
  );
}
