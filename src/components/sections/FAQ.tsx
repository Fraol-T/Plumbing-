"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { FAQ_DATA } from "@/data/plumberData";
import { useLanguage } from "@/context/LanguageContext";

interface FAQProps {
  onCallClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onCallClick }) => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("faq.sectionTitle")}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t("faq.sectionSubtitle")}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;
            const question = t(`faq.items.${idx}.question`);
            const answer = t(`faq.items.${idx}.answer`);

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-base font-bold transition-colors ${isOpen ? "text-orange-500" : "text-slate-900"}`}>
                    {question}
                  </span>
                  <div className="p-1 text-slate-400">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center space-y-3">
          <p className="text-sm font-semibold text-slate-600">
            {t("faq.stillHaveQuestions")}
          </p>
          <button
            onClick={onCallClick}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition transform active:scale-95"
          >
            <Phone className="w-4 h-4" /> {t("faq.callUsNow")}
          </button>
        </div>

      </div>
    </section>
  );
};
