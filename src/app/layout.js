// ✅ FIXED: app/layout.js (plain JavaScript — no TypeScript)

import "./globals.css";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";

const syne = Syne({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Blaise-Tech — Full Stack & Smart Contract Developer",
  description: "Production-grade Web3 protocols, fintech platforms, and enterprise systems. Based in Nigeria.",
  keywords: ["Blaise-Tech", "Solidity", "Next.js", "Web3", "DeFi", "Smart Contracts", "Nigeria"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="font-body">
        {children}

        {/* VISITOR TRACKER — runs automatically on every page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              fetch('/api/track', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
              }).catch(() => {});
            `,
          }}
        />
      </body>
    </html>
  );
}