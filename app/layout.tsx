import type { Metadata } from "next";
import { RoleProvider } from "@/components/providers/RoleContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Simplify | Intelligent Business Systems",
    template: "%s | Simplify",
  },
  description:
    "Simplify builds AI-powered systems that automate workflows, connect business tools, and help teams do more with less.",
  keywords: [
    "AI automation Kenya",
    "AI agents",
    "workflow automation",
    "business automation",
    "AI systems",
    "AI consulting Kenya",
    "Simplify Kenya",
  ],
  openGraph: {
    title: "Simplify | Intelligent Business Systems",
    description:
      "AI-powered systems that automate workflows, connect tools, and help businesses scale smarter.",
    url: "https://www.simplify.ke",
    siteName: "Simplify",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplify | Intelligent Business Systems",
    description:
      "AI-powered systems that automate workflows, connect tools, and help businesses scale smarter.",
  },
  metadataBase: new URL("https://www.simplify.ke"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <RoleProvider>{children}</RoleProvider>
      </body>
    </html>
  );
}