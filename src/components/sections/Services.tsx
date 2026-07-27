"use client";

import React, { useState } from "react";
import { AlertTriangle, Wrench, Droplet, Waves, Home, ShieldCheck, ArrowRight } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/plumberData";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesProps {
  onBookService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "alert-triangle":
        return <AlertTriangle className="w-6 h-6 text-orange-600" />;
      case "wrench":
        return <Wrench className="w-6 h-6 text-orange-600" />;
      case "droplet":
        return <Droplet className="w-6 h-6 text-orange-600" />;
      case "waves":
        return <Waves className="w-6 h-6 text-orange-600" />;
      case "home":
        return <Home className="w-6 h-6 text-orange-600" />;
      case "shield-check":
        return <ShieldCheck className="w-6 h-6 text-orange-600" />;
      default:
        return <Wrench className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("services.sectionTitle")}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t("services.sectionSubtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const title = t(`services.items.${service.id}.title`);
            const shortDesc = t(`services.items.${service.id}.shortDesc`);

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Tile Box */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-50/80 border border-orange-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300">
                    {React.cloneElement(getIcon(service.iconName), {
                      className: "w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300",
                    })}
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {shortDesc}
                  </p>
                </div>

                {/* Learn More Action */}
                <div className="pt-6 mt-6 border-t border-slate-50">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 hover:text-orange-600 transition group/btn"
                  >
                    <span>{t("services.learnMore")}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(title) => {
          setSelectedService(null);
          onBookService(title);
        }}
      />
    </section>
  );
};
