"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, Check } from "lucide-react";
import Reveal from "./ui/Reveal";

const PROJECT_TYPES = [
  "E-Commerce / Storefront",
  "Hospitality / Hotel Site",
  "Valuation / Professional Practice",
  "DeFi / Smart Contracts",
  "Fintech / Banking",
  "Healthcare / Hospital",
  "Logistics / Shipping",
  "Trading Terminal",
  "Other",
];

const BUDGETS = ["< $500", "$500 – $2k", "$2k – $5k", "$5k – $10k", "$10k+", "Let's discuss"];

// WhatsApp number — update once in this constant
const WA_NUMBER = "2349027475360";

export default function QuickQuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    budget: BUDGETS[2],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const updateField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () => {
    const lines = [
      "*New project enquiry — via Blaise-Tech portfolio*",
      "",
      `*Name:* ${form.name || "(not provided)"}`,
      `*Email:* ${form.email || "(not provided)"}`,
      `*Project Type:* ${form.projectType}`,
      `*Budget:* ${form.budget}`,
      "",
      "*Brief:*",
      form.message || "(no brief provided)",
    ];
    return lines.join("\n");
  };

  const handleSend = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${WA_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <section id="quote" className="py-20 md:py-32 px-6 lg:px-12 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#25D366]/[0.04] to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[820px] mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-400 to-transparent" />
            <span className="text-[11px] sm:text-[12px] tracking-[4px] uppercase text-emerald-400 font-mono">
              Get a Quote
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(26px,4vw,44px)] font-extrabold leading-[1.1] tracking-tight mb-3">
            Tell me about the project.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[14px] sm:text-[15px] text-white/35 mb-10 max-w-[520px] font-light leading-[1.8]">
            Fill this in — the form composes a structured WhatsApp message and
            opens the chat. No email back-and-forth. You see exactly what gets
            sent. I usually reply within a few hours.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSend}
            className="rounded-2xl sm:rounded-3xl bg-white/[0.012] border border-white/[0.05] p-5 sm:p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your name"
                value={form.name}
                onChange={updateField("name")}
                placeholder="e.g. Adaeze O."
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={updateField("email")}
                placeholder="you@company.com"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <SelectField
                label="Project type"
                value={form.projectType}
                onChange={updateField("projectType")}
                options={PROJECT_TYPES}
              />
              <SelectField
                label="Budget range"
                value={form.budget}
                onChange={updateField("budget")}
                options={BUDGETS}
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-[12px] font-mono tracking-wider uppercase text-white/35 mb-2">
                Project brief
              </label>
              <textarea
                value={form.message}
                onChange={updateField("message")}
                rows={4}
                placeholder="What are you building, what's the timeline, anything reference-worthy…"
                className="w-full px-4 py-3 rounded-xl bg-[#0a0b1e] border border-white/[0.06] text-white/85 text-[14px] sm:text-[15px] placeholder:text-white/20 focus:border-emerald-400/40 focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-[11px] sm:text-[12px] text-white/30 font-mono leading-relaxed">
                Opens in WhatsApp. Your details stay on your device until you press send.
              </p>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] text-white text-[13px] sm:text-[14px] font-bold shadow-lg shadow-[#25D366]/20 hover:bg-[#22c55e] transition-colors duration-300 relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={16} /> Sent — check WhatsApp
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <MessageCircle size={16} />
                      Send to WhatsApp
                      <Send size={14} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="block text-[11px] sm:text-[12px] font-mono tracking-wider uppercase text-white/35 mb-2">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 rounded-xl bg-[#0a0b1e] border border-white/[0.06] text-white/85 text-[14px] sm:text-[15px] placeholder:text-white/20 focus:border-emerald-400/40 focus:outline-none transition-colors"
      />
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="block text-[11px] sm:text-[12px] font-mono tracking-wider uppercase text-white/35 mb-2">
        {label}
      </span>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-[#0a0b1e] border border-white/[0.06] text-white/85 text-[14px] sm:text-[15px] focus:border-emerald-400/40 focus:outline-none transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23ffffff60' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          paddingRight: "2.5rem",
        }}
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0a0b1e]">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
