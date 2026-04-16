"use client";

import { motion } from "framer-motion";
import { ExternalLink, Instagram, Github, Linkedin } from "lucide-react";
import Reveal from "./ui/Reveal";
import { socials } from "@/data/socials";

const ICONS = {
  ig: Instagram, github: Github, linkedin: Linkedin,
  x: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  upwork: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.489-1.212 2.66-2.696 2.66zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>,
  tiktok: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.77 0 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V12.8a8.28 8.28 0 005.58 2.17V11.5a4.84 4.84 0 01-3.77-1.82V6.69h3.77z"/></svg>,
};

function SocialIcon({ platform, size = 20 }) {
  const Icon = ICONS[platform];
  if (!Icon) return <ExternalLink size={size} />;
  if (typeof Icon === "function" && !Icon.render) return <Icon className="w-5 h-5" style={{ width: size, height: size }} />;
  return <Icon size={size} />;
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 px-6 lg:px-12 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-neon-violet/[0.05] to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto relative">
        {/* CTA banner — like reference site */}
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-neon-violet/20 via-obsidian-100 to-neon-cyan/10 border border-neon-violet/15 p-10 md:p-14 text-center mb-16">
            <h2 className="font-display text-[clamp(24px,4vw,36px)] font-extrabold leading-[1.15] tracking-tight mb-4">
              Ready to Build Something?
            </h2>
            <p className="text-[15px] text-white/40 max-w-[440px] mx-auto leading-[1.8] font-light mb-8">
              If you can imagine it, we can build it. Contact Blaise-Tech — we deliver production-grade web applications that drive results.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/2349027475360" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] text-white text-[14px] font-bold hover:bg-[#22c55e] transition-all duration-300 shadow-lg shadow-[#25D366]/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a href="mailto:blaiseidoko@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 text-white/70 text-[14px] font-semibold hover:border-white/30 hover:text-white transition-all duration-300">
                Email Us
              </a>
            </div>
          </div>
        </Reveal>

        {/* Social grid */}
        <Reveal delay={0.1}>
          <div className="text-center mb-8">
            <span className="text-[12px] tracking-[4px] uppercase text-white/20 font-mono">Find us everywhere</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[640px] mx-auto">
            {socials.map(({ name, handle, url, platform }) => (
              <motion.a key={name} href={url} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex flex-col items-center gap-2 py-5 px-4 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-neon-violet/25 transition-all duration-300 group">
                <span className="text-white/30 group-hover:text-neon-violet-light transition-colors">
                  <SocialIcon platform={platform} size={22} />
                </span>
                <div className="text-center">
                  <div className="text-[13px] font-display font-bold">{name}</div>
                  <div className="text-[11px] text-white/25 font-mono">{handle}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
