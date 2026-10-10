import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamza Ali — Software Engineering Student",
  description:
    "Personal portfolio of Hamza Ali, Software Engineering student at COMSATS University Islamabad. Focused on software development, applied AI/ML workflows, and cybersecurity fundamentals.",
  icons: {
    icon: "/icons/Logo SVG.svg",
  },
  openGraph: {
    title: "Hamza Ali — Software Engineering Student",
    description:
      "Personal portfolio showcasing practical software engineering, applied AI/ML workflows, credentials, and achievements.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
