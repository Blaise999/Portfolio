"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ words = [] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const word = words[idx];
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length === word.length) setTimeout(() => setDel(true), 2200);
      } else {
        setText(word.slice(0, text.length - 1));
        if (!text.length) { setDel(false); setIdx((i) => (i + 1) % words.length); }
      }
    }, del ? 30 : 65);
    return () => clearTimeout(t);
  }, [text, del, idx, words]);

  return (
    <span>
      {text}
      <span className="border-r-2 border-neon-violet animate-blink ml-px">&thinsp;</span>
    </span>
  );
}
