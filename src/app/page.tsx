"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/ui/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Emergency Repairs");

  const handleOpenBooking = (serviceName: string = "Emergency Repairs") => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Header */}
      <Header onOpenBooking={() => handleOpenBooking("Emergency Repairs")} />

      {/* Hero Section */}
      <Hero onScheduleClick={() => handleOpenBooking("Emergency Repairs")} />

      {/* Our Services Section */}
      <Services onBookService={(serviceTitle) => handleOpenBooking(serviceTitle)} />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQ onCallClick={() => handleOpenBooking("Emergency Repairs")} />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedService}
      />
    </main>
  );
}
