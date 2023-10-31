import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plan Tracker",
  description: "Track your plans here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[gray]/5">{children}</body>
    </html>
  );
}
