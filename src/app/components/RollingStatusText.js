"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const pillTexts = ["Open for Work", "Open for Collaboration"];
const roleTexts = ["Data Scientist", "Web Developer"];

export default function RollingStatusText({ type = "pill" }) {
  const [index, setIndex] = useState(0);
  const texts = type === "role" ? roleTexts : pillTexts;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  if (type === "role") {
    return (
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
        <div className="h-5 overflow-hidden relative flex items-center w-[110px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ x: 20, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -20, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="text-white absolute text-sm font-bold whitespace-nowrap"
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <>
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></span>
      <div className="h-5 overflow-hidden relative flex items-center w-[180px] pr-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            className="text-[#c8c0d5] absolute flex items-center text-xs font-medium tracking-wider uppercase whitespace-nowrap"
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </>
  );
}
