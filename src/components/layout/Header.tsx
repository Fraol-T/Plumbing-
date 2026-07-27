"use client";

import React, { useState, useEffect } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const { t, locale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition transform">
              <span className="text-xl sm:text-2xl font-black tracking-tighter">H</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-orange-500 transition">
                {t("header.brandName")}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                {t("header.tagline")}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-orange-500 transition focus:outline-none">
                {t("header.services")}{" "}
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    servicesDropdown ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 py-3 space-y-1 animate-fade-in">
                  <a href="#services" className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">
                    {t("services.items.emergency-repairs.title")}
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">
                    {t("services.items.drain-cleaning.title")}
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">
                    {t("services.items.leak-detection.title")}
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">
                    {t("services.items.pipe-installation.title")}
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">
                    {t("services.items.water-heater-service.title")}
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition">
                    {t("services.items.preventive-maintenance.title")}
                  </a>
                </div>
              )}
            </div>

            <a href="#how-it-works" className="hover:text-orange-500 transition">
              {t("header.howItWorks")}
            </a>
            <a href="#testimonials" className="hover:text-orange-500 transition">
              {t("header.testimonials")}
            </a>
            <a href="#faq" className="hover:text-orange-500 transition">
              {t("header.faq")}
            </a>
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Phone Call Pill */}
            <a
              href="tel:5552586234"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/80 hover:bg-slate-50 text-slate-800 text-sm font-bold shadow-xs transition"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>{t("header.phone")}</span>
            </a>

            {/* Book Now Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 transition transform active:scale-95"
            >
              {t("header.bookNow")}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-orange-500 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl px-6 py-5 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-500 transition"
            >
              {t("header.services")}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-500 transition"
            >
              {t("header.howItWorks")}
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-500 transition"
            >
              {t("header.testimonials")}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-500 transition"
            >
              {t("header.faq")}
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:5552586234"
              className="w-full text-center py-2.5 rounded-full border border-slate-200 text-slate-800 text-sm font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-500" /> {t("header.phone")}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-orange-500 text-white font-bold text-sm shadow-md"
            >
              {t("header.bookNow")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
