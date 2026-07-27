"use client";

import React, { useState } from "react";
import { X, Calendar, Phone, User, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Emergency Repairs",
}) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: defaultService,
    preferredDate: "",
    isEmergency: false,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

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
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            {t("booking.badge")}
          </div>
          <h3 className="text-2xl font-bold">{t("booking.modalTitle")}</h3>
          <p className="text-slate-300 text-sm mt-1">
            {t("booking.modalSubtitle")}
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">{t("booking.receivedTitle")}</h4>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              {t("booking.receivedDesc", { name: formData.name, phone: formData.phone })}
            </p>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 text-left text-xs text-slate-700 space-y-1">
              <p><strong>{t("booking.summaryService")}</strong> {formData.service}</p>
              <p>
                <strong>{t("booking.summaryUrgency")}</strong>{" "}
                {formData.isEmergency ? t("booking.summaryEmergencyLabel") : t("booking.summaryStandardLabel")}
              </p>
              {formData.preferredDate && (
                <p><strong>{t("booking.summaryDate")}</strong> {formData.preferredDate}</p>
              )}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:5552586234"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition"
              >
                <Phone className="w-4 h-4" /> {t("booking.callDispatchNow")}
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2.5 text-sm text-slate-500 hover:text-slate-800 font-medium"
              >
                {t("booking.closeWindow")}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Urgency toggle */}
            <div
              className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                formData.isEmergency
                  ? "bg-red-50 border-red-200 text-red-700"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
              onClick={() => setFormData({ ...formData, isEmergency: !formData.isEmergency })}
            >
              <div className="flex items-center gap-3">
                <AlertCircle className={`w-5 h-5 ${formData.isEmergency ? "text-red-600 animate-pulse" : "text-slate-400"}`} />
                <div>
                  <p className="text-sm font-bold">{t("booking.emergencyToggleTitle")}</p>
                  <p className="text-xs opacity-80">{t("booking.emergencyToggleDesc")}</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={formData.isEmergency}
                onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {t("booking.selectServiceLabel")}
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none"
              >
                <option value={t("services.items.emergency-repairs.title")}>
                  {t("services.items.emergency-repairs.title")}
                </option>
                <option value={t("services.items.drain-cleaning.title")}>
                  {t("services.items.drain-cleaning.title")}
                </option>
                <option value={t("services.items.leak-detection.title")}>
                  {t("services.items.leak-detection.title")}
                </option>
                <option value={t("services.items.pipe-installation.title")}>
                  {t("services.items.pipe-installation.title")}
                </option>
                <option value={t("services.items.water-heater-service.title")}>
                  {t("services.items.water-heater-service.title")}
                </option>
                <option value={t("services.items.preventive-maintenance.title")}>
                  {t("services.items.preventive-maintenance.title")}
                </option>
              </select>
            </div>

            {/* Name & Phone inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("booking.nameLabel")}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Sarah Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t("booking.phoneLabel")}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {t("booking.dateLabel")}
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {t("booking.notesLabel")}
              </label>
              <textarea
                rows={2}
                placeholder={t("booking.notesPlaceholder")}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
              >
                {t("booking.cancel")}
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-orange-500/25 transition transform active:scale-95"
              >
                {t("booking.confirmBooking")}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
