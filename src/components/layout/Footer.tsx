"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B192C] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight">
                  {t("header.brandName")}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                  {t("header.tagline")}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-orange-400 transition">
                  {t("header.services")}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-orange-400 transition">
                  {t("header.howItWorks")}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-orange-400 transition">
                  {t("header.testimonials")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition">
                  {t("header.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:5552586234" className="hover:text-white transition">
                  {t("header.phone")}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:info@hydrofix.com" className="hover:text-white transition">
                  info@hydrofix.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>123 Main Street<br />Mirpur, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t("footer.hours")}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2 text-orange-400 font-semibold">
                <Clock className="w-4 h-4" />
                <span>{t("footer.emergency247")}</span>
              </div>
              <div className="space-y-1 text-xs">
                <p><strong className="text-slate-300">{t("footer.regularHours")}</strong></p>
                <p>{t("footer.monFri")}</p>
                <p>{t("footer.sat")}</p>
                <p>{t("footer.sun")}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-footer Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t("footer.copyright")}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              {t("footer.terms")}
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              {t("footer.contactUs")}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
