"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/plumberData";
import { useLanguage } from "@/context/LanguageContext";

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeItemData = TESTIMONIALS_DATA[currentIndex];
  const quote = t(`testimonials.items.${currentIndex}.quote`);
  const author = t(`testimonials.items.${currentIndex}.author`);
  const location = t(`testimonials.items.${currentIndex}.location`);

  return (
    <section id="testimonials" className="py-20 bg-[#FAFDFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("testimonials.sectionTitle")}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t("testimonials.sectionSubtitle")}
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 text-center space-y-6">
          
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1">
            {[...Array(activeItemData.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="text-slate-800 text-base sm:text-lg font-medium italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Author Details */}
          <div className="flex flex-col items-center space-y-2 pt-2">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-400 shadow-sm">
              <Image
                src={activeItemData.avatarUrl}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {author}
              </h4>
              <p className="text-xs text-slate-500">
                {location}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="max-w-2xl mx-auto mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-xs transition"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-7 bg-orange-500"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-xs transition"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <span className="text-xs font-semibold text-slate-400">
            {currentIndex + 1} {t("testimonials.of")} {TESTIMONIALS_DATA.length}
          </span>
        </div>

      </div>
    </section>
  );
};
