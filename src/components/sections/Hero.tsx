"use client";

import React from "react";
import Image from "next/image";
import { Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onScheduleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-[#EBF5F8] via-[#F4F9FB] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6 z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {t("hero.titleLine1")} <br className="hidden sm:inline" />
              <span className="text-slate-900">{t("hero.titleLine2")} </span>
              <br className="hidden sm:inline" />
              {t("hero.titleLine3")}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {t("hero.subheadline")}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScheduleClick}
                className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-xl shadow-orange-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {t("hero.scheduleBtn")}
              </button>

              <a
                href="#services"
                className="px-8 py-3.5 rounded-full bg-white/80 hover:bg-white text-slate-700 font-bold text-base border border-slate-300 shadow-sm transition hover:border-slate-400"
              >
                {t("hero.learnMoreBtn")}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200/60 max-w-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100/80 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t("hero.badge247Title")}</h4>
                  <p className="text-xs text-slate-500">{t("hero.badge247Desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100/80 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t("hero.badgeLicensedTitle")}</h4>
                  <p className="text-xs text-slate-500">{t("hero.badgeLicensedDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Plumber Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 bg-gradient-to-t from-slate-900/20 to-transparent">
              <Image
                src="/images/plumber_hero.png"
                alt="HydroFix Certified Plumber"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
