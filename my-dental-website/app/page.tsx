"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BeforeAfterSlider } from "@/components/before-after-slider/BeforeAfterSlider";
import { Button } from "@/components/ui/Button";
import testimonialsData from "@/data/testimonials.json";
import { CaseStudy, Testimonial } from "@/types";

const testimonials = testimonialsData.testimonials as Testimonial[];

// Debond, EMS scaling, FRC and Veneer cases with WebP images.
const cases: CaseStudy[] = [
  {
    id: 1,
    beforeImage: "/cases/Debond before.PNG",
    afterImage: "/cases/Debond after.PNG",
    treatment: "Debond (Braces Removal)",
    timeframe: "Single visit",
    testimonialIds: [2, 3, 6, 7, 8]
  },
  {
    id: 2,
    beforeImage: "/cases/EMS scaling before.PNG",
    afterImage: "/cases/EMS scaling after.PNG",
    treatment: "EMS Teeth Scaling",
    timeframe: "45 minutes",
    testimonialIds: [9]
  },
  {
    id: 3,
    beforeImage: "/cases/FRC before.PNG",
    afterImage: "/cases/FRC after.PNG",
    treatment: "FRC (Composite Build-Up)",
    timeframe: "1–2 visits",
    testimonialIds: [1, 5]
  },
  {
    id: 4,
    beforeImage: "/cases/Veneer before.PNG",
    afterImage: "/cases/Veneer after.PNG",
    treatment: "Porcelain Veneers",
    timeframe: "2–3 visits",
    testimonialIds: []
  }
];

const TestimonialTicker = dynamic(
  () =>
    import("@/components/testimonial-ticker/TestimonialTicker").then(
      (mod) => mod.TestimonialTicker
    ),
  { ssr: false }
);

export default function Page() {
  const [activeCaseId, setActiveCaseId] = useState<number>(cases[0].id);
  const [paused, setPaused] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      setIsTabHidden(document.visibilityState === "hidden");
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <main className="min-h-screen">
      <section className="hero-shell">
        <div className="hero-shell-inner">
          <header>
            <p className="hero-kicker">
              Klinik Pergigian Dental Heritage
            </p>
            <h1 className="hero-title">
              See real{" "}
              <span className="hero-title-accent">
                before &amp; after
              </span>{" "}
              smiles, backed by 5‑star patient stories.
            </h1>
            <p className="hero-subtitle">
              Drag to compare transformations, then read real Google
              reviews from patients who trusted Dental Heritage with
              their braces, veneers, and scaling.
            </p>
            <div className="hero-actions">
              <Button>Book Free Consultation</Button>
              <Button variant="ghost">WhatsApp the clinic</Button>
            </div>
          </header>

          <div className="hero-main">
            <BeforeAfterSlider
              cases={cases}
              testimonials={testimonials}
              externalActiveCaseId={activeCaseId}
              paused={paused || isTabHidden}
              onPauseChange={setPaused}
              onActiveCaseChange={setActiveCaseId}
            />
          </div>
        </div>
      </section>

      <TestimonialTicker
        testimonials={testimonials}
        activeCaseId={activeCaseId}
        onSelectCase={setActiveCaseId}
        isTabHidden={isTabHidden}
      />

      <section className="section-cta">
        <div className="section-cta-inner">
          <h2 className="section-cta-title">
            Ready for your own transformation?
          </h2>
          <p className="section-cta-text">
            Our gentle, detail‑oriented doctors will help you choose
            the right treatment, whether it&apos;s braces, veneers, or
            a simple scaling.
          </p>
          <Button>Book Free Consultation</Button>
        </div>
      </section>
    </main>
  );
}

