import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abu Backer Siddique M | Portfolio",
  description: "Designer, Developer & Innovator. B.Sc. Computer Science student at Jamal Mohamed College, Tiruchirappalli. Expertise in Design, Web Development, DTP, and Tally.",
  keywords: ["Abu Backer Siddique", "Portfolio", "Designer", "Developer", "Trichy", "Tamil Nadu", "UI/UX", "CorelDraw", "Tally Prime", "Web Development"],
  authors: [{ name: "Abu Backer Siddique M" }],
  openGraph: {
    title: "Abu Backer Siddique M | Portfolio",
    description: "Designer, Developer & Innovator from Trichy, Tamil Nadu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
