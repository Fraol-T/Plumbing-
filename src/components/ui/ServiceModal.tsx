"use client";

import React from "react";
import { X, CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import { ServiceItem } from "@/data/plumberData";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  const { t } = useLanguage();
  if (!service) return null;

  const title = t(`services.items.${service.id}.title`);
  const fullDesc = t(`services.items.${service.id}.fullDesc`);
  const features = (t(`services.items.${service.id}.features`) as any) || service.features;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-2">
            {t("services.certifiedBadge")}
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-slate-600 leading-relaxed text-sm">
            {fullDesc}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              {t("services.includedStandards")}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Array.isArray(features) && features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-50/70 border border-orange-200/60 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-orange-950">{t("services.immediateDispatch")}</p>
              <p className="text-xs text-orange-800">{t("services.licensedOnDuty")}</p>
            </div>
            <a
              href="tel:5552586234"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 bg-white px-3 py-2 rounded-lg border border-orange-200 shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" /> {t("services.callDispatch")}
            </a>
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              {t("services.close")}
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(title);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-orange-500/25 transition transform active:scale-95"
            >
              {t("services.bookService", { service: title })} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
