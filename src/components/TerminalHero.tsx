"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "$ avatek --scan --target business.local", delay: 0 },
  { text: "[+] Scanning network perimeter...", delay: 800 },
  { text: "[+] Analyzing compliance: ФЗ-152, ФЗ-187 ✓", delay: 1600 },
  { text: "[+] Vulnerability assessment: complete", delay: 2400 },
  { text: "[✓] Your business is protected by AVATEK", delay: 3200 },
];

export function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), lines[i].delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-text-muted font-mono">
            avatek@security:~
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-sm space-y-1.5 min-h-[180px]">
          {lines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={
                i === lines.length - 1
                  ? "text-cyber-green font-bold"
                  : "text-text-secondary"
              }
            >
              {line.text}
            </motion.div>
          ))}
          {visibleLines < lines.length && (
            <span className="cursor-blink text-text-muted" />
          )}
        </div>
      </div>
    </div>
  );
}
