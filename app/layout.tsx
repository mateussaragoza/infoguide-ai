import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InfoGuide AI",
  description: "Generate structured learning guides for any topic.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
