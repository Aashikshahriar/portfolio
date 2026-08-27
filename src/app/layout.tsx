import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.shortBio,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
