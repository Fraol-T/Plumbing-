"use client";

import React from "react";
import { PhoneCall, Clock, Wrench, CheckCircle2 } from "lucide-react";
import { STEPS_DATA } from "@/data/plumberData";
import { useLanguage } from "@/context/LanguageContext";

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "phone-call":
        return <PhoneCall className="w-8 h-8 text-orange-400" />;
      case "clock":
        return <Clock className="w-8 h-8 text-orange-400" />;
      case "wrench":
        return <Wrench className="w-8 h-8 text-orange-400" />;
      case "check-circle":
        return <CheckCircle2 className="w-8 h-8 text-orange-400" />;
      default:
        return <PhoneCall className="w-8 h-8 text-orange-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white via-[#FAFDFE] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("howItWorks.sectionTitle")}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t("howItWorks.sectionSubtitle")}
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS_DATA.map((step, idx) => {
            const stepTitle = t(`howItWorks.steps.${idx}.title`);
            const stepDesc = t(`howItWorks.steps.${idx}.description`);

            return (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-8 border border-orange-200/60 shadow-xs hover:shadow-md transition-shadow text-center flex flex-col items-center space-y-5"
              >
                {/* Peach Icon Container */}
                <div className="w-20 h-16 rounded-xl bg-[#FFF6F0] border border-orange-100 flex items-center justify-center">
                  {getStepIcon(step.iconName)}
                </div>

                {/* Title & Body */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {stepTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stepDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
