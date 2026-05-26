import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { AppShell } from "@/components/AppShell";
import { ProgressTracker } from "@/components/ProgressTracker";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Geometry Summer Prep",
    template: "%s · Geometry Summer Prep",
  },
  description:
    "A friendly summer geometry study app for 9th grade students — lessons, practice, worksheets, and progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full antialiased">
        <ProgressTracker />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
