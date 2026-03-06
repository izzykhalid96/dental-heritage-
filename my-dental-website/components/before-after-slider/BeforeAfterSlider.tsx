"use client";

import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { PanInfo, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CaseStudy, Testimonial } from "@/types";
import styles from "./slider.module.css";
import { SliderHandle } from "./SliderHandle";

type Props = {
  cases: CaseStudy[];
  testimonials: Testimonial[];
  externalActiveCaseId?: number;
  paused: boolean;
  isTabHidden?: boolean;
  onPauseChange?: (paused: boolean) => void;
  onActiveCaseChange?: (caseId: number) => void;
};

const AUTO_ROTATE_MS = 5000;

const doctorNames = ["Dr Nadia", "Dr Wani", "Dr Syazuwani", "Dr Nurina"];

function getDoctorFromQuote(quote: string): string | null {
  const lowered = quote.toLowerCase();
  for (const name of doctorNames) {
    if (lowered.includes(name.toLowerCase())) return name;
  }
  return null;
}

export const BeforeAfterSlider: React.FC<Props> = ({
  cases,
  testimonials,
  externalActiveCaseId,
  paused,
  isTabHidden,
  onPauseChange,
  onActiveCaseChange
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // start from first case
  const [sliderPercent, setSliderPercent] = useState(0.5);
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // sync with external selection (from ticker)
  useEffect(() => {
    if (!externalActiveCaseId) return;
    const idx = cases.findIndex((c) => c.id === externalActiveCaseId);
    if (idx >= 0 && idx !== activeIndex) {
      setActiveIndex(idx);
      setSliderPercent(0.5);
    }
  }, [externalActiveCaseId, cases, activeIndex]);

  const currentCase = cases[activeIndex];
  const total = cases.length;
  const isInitialSlide = activeIndex === 0;

  const relatedTestimonials = useMemo(
    () => testimonials.filter((t) => t.linkedCaseId === currentCase.id),
    [testimonials, currentCase.id]
  );

  const doctorBadge = getDoctorFromQuote(relatedTestimonials[0]?.quote ?? "");

  const goToIndex = useCallback(
    (idx: number) => {
      const safeIndex = ((idx % total) + total) % total;
      setActiveIndex(safeIndex);
      setSliderPercent(0.5);
      const selected = cases[safeIndex];
      if (selected && onActiveCaseChange) {
        onActiveCaseChange(selected.id);
      }
    },
    [total, cases, onActiveCaseChange]
  );

  // auto-rotate cases
  useEffect(() => {
    if (paused || hovered || prefersReducedMotion || isTabHidden) return;
    const id = setInterval(() => {
      goToIndex(activeIndex + 1);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [activeIndex, goToIndex, paused, hovered, prefersReducedMotion, isTabHidden]);

  const onDrag = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = info.point.x - rect.left;
    const percent = Math.min(Math.max(relativeX / rect.width, 0.05), 0.95);
    setSliderPercent(percent);
    onPauseChange?.(true);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goToIndex(activeIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToIndex(activeIndex - 1);
    }
  };

  return (
    <section
      className={styles.wrapper}
      aria-label="Before and after comparison slider"
    >
      <div
        className={styles.header}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
          <p className={styles.caseLabel}>
            Case {activeIndex + 1} of {total}
          </p>
          <h2 className={styles.title}>{currentCase.treatment}</h2>
          <p className={styles.subtitle}>
            {currentCase.timeframe} • {relatedTestimonials.length} happy
            patients
          </p>
          {doctorBadge && (
            <span className={styles.doctorBadge}>🩺 {doctorBadge}</span>
          )}
        </div>
        <button
          type="button"
          className={styles.pauseButton}
          onClick={() => onPauseChange?.(!paused)}
        >
          {paused ? "Resume animation" : "Pause animation"}
        </button>
      </div>

      <div
        ref={containerRef}
        className={styles.slider}
        onKeyDown={onKeyDown}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-live="polite"
      >
        <Image
          src={currentCase.beforeImage}
          alt={`${currentCase.treatment} before`}
          width={1200}
          height={800}
          className={styles.image}
          priority={isInitialSlide}
          loading={isInitialSlide ? "eager" : "lazy"}
        />

        <div
          className={styles.afterMask}
          style={{ width: `${sliderPercent * 100}%` }}
          aria-hidden="true"
        >
          <Image
            src={currentCase.afterImage}
            alt=""
            width={1200}
            height={800}
            className={styles.image}
            priority={isInitialSlide}
            loading={isInitialSlide ? "eager" : "lazy"}
          />
        </div>

        <div className={styles.gradientOverlay} aria-hidden="true" />

        <span className={`${styles.badge} ${styles.badgeBefore}`}>BEFORE</span>
        <span className={`${styles.badge} ${styles.badgeAfter}`}>AFTER</span>

        <SliderHandle
          dragConstraints={containerRef}
          onDrag={onDrag}
          style={{
            left: `${sliderPercent * 100}%`,
            transform: "translate(-50%, -50%)",
            top: "50%"
          }}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.caption}>
          <span className={styles.captionTitle}>{currentCase.treatment}</span>
          <span> • {currentCase.timeframe}</span>
          <p className={styles.captionHint}>
            Use left/right arrow keys or drag the handle to compare.
          </p>
        </div>
        <div className={styles.dots}>
          {cases.map((c, i) => (
            <button
              key={c.id}
              type="button"
              aria-label={`Go to case ${i + 1}`}
              className={`${styles.dot} ${
                i === activeIndex ? styles.dotActive : ""
              }`}
              onClick={() => goToIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

