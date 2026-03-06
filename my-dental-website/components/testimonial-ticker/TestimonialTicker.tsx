"use client";

import React, { useMemo, useState } from "react";
import { Testimonial } from "@/types";
import styles from "./ticker.module.css";
import { TestimonialCard } from "./TestimonialCard";

type Props = {
  testimonials: Testimonial[];
  activeCaseId: number;
  onSelectCase: (caseId: number) => void;
  isTabHidden?: boolean;
};

export const TestimonialTicker: React.FC<Props> = ({
  testimonials,
  activeCaseId,
  onSelectCase,
  isTabHidden
}) => {
  const [hovering, setHovering] = useState(false);
  const [tappedPause, setTappedPause] = useState(false);

  const combined = useMemo(
    () => [...testimonials, ...testimonials],
    [testimonials]
  );

  const isPaused = hovering || tappedPause || isTabHidden;

  return (
    <section className={styles.wrapper} aria-label="Patient testimonial ticker">
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Real patient stories</h3>
          <p className={styles.subtitle}>
            Scrolls right to left • Hover or tap to pause • Click a card to see
            the matching case
          </p>
        </div>
      </div>

      <div
        className={styles.viewport}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => setTappedPause((p) => !p)}
      >
        <div
          className={`${styles.track} ${
            isPaused ? styles.trackPaused : ""
          }`}
        >
          {combined.map((t, index) => {
            const highlighted = t.linkedCaseId === activeCaseId;
            return (
              <div
                key={`${t.id}-${index}`}
                className={styles.item}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCase(t.linkedCaseId);
                }}
              >
                <TestimonialCard
                  testimonial={t}
                  highlighted={highlighted}
                  onClick={() => onSelectCase(t.linkedCaseId)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

