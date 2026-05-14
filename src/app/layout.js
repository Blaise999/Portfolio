import "./globals.css";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";

const syne = Syne({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Blaise-Tech — Full-Stack & Smart Contract Developer",
  description: "Production-grade Web3 protocols, fintech platforms, hospitality, valuation, healthcare, and enterprise systems. Based in Nigeria. Building for the world.",
  keywords: ["Blaise-Tech", "Solidity", "Next.js", "Web3", "DeFi", "Smart Contracts", "Nigeria", "Framer Motion", "Full-Stack Developer"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030014",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="font-body">
        {children}

        {/* VISITOR TRACKER — silently logs IP / city / country on every page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && !sessionStorage.getItem('bt_tracked')) {
                fetch('/api/track', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    ref: document.referrer || 'direct',
                    path: window.location.pathname,
                    ua: navigator.userAgent,
                    screen: window.innerWidth + 'x' + window.innerHeight,
                  }),
                }).then(() => sessionStorage.setItem('bt_tracked', '1')).catch(() => {});
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
