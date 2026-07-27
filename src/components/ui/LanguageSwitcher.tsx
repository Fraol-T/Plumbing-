"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center p-1 bg-slate-100/90 rounded-full border border-slate-200/80 text-xs font-bold shadow-xs">
      <button
        onClick={() => setLocale("en")}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
          locale === "en"
            ? "bg-white text-orange-600 shadow-xs border border-slate-200/60 font-extrabold"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label="Switch to English"
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </button>

      <button
        onClick={() => setLocale("am")}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
          locale === "am"
            ? "bg-white text-orange-600 shadow-xs border border-slate-200/60 font-extrabold"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label="Switch to Amharic"
      >
        <span>🇪🇹</span>
        <span>አማርኛ</span>
      </button>
    </div>
  );
};
