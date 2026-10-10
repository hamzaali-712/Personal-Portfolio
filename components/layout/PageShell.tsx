import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-canvas text-brand-indigo font-sans selection:bg-brand-strawberry/15 selection:text-brand-indigo">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
