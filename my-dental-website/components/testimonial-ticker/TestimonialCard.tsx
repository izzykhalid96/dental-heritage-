"use client";

import React from "react";
import Image from "next/image";
import { Testimonial } from "@/types";
import { StarRating } from "@/components/ui/StarRating";
import styles from "./ticker.module.css";

type Props = {
  testimonial: Testimonial;
  highlighted: boolean;
  onClick: () => void;
};

function getDoctorFromQuote(quote: string): string | null {
  const lowered = quote.toLowerCase();
  if (lowered.includes("dr nadia")) return "Dr Nadia";
  if (lowered.includes("dr wani")) return "Dr Wani";
  if (lowered.includes("dr syazuwani")) return "Dr Syazuwani";
  if (lowered.includes("dr nurina")) return "Dr Nurina";
  return null;
}

export const TestimonialCard: React.FC<Props> = ({
  testimonial,
  highlighted,
  onClick
}) => {
  const doctor = getDoctorFromQuote(testimonial.quote);
  const showCamera = testimonial.hasPhotos && (testimonial.photoCount ?? 0) > 0;

  return (
    <article
      className={`${styles.card} ${highlighted ? styles.cardActive : ""}`}
      onClick={onClick}
    >
      <div className={styles.cardTopRow}>
        <StarRating rating={testimonial.rating} />
        <span className={styles.verifiedBadge}>✓ Verified Patient</span>
      </div>

      <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>

      <div className={styles.metaRow}>
        <div className={styles.patient}>
          <div className={styles.avatar}>
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={32}
              height={32}
              className={styles.avatarImg}
              loading="lazy"
            />
          </div>
          <div>
            <p className={styles.patientName}>{testimonial.name}</p>
            <p className={styles.treatment}>{testimonial.treatmentType}</p>
          </div>
        </div>
        <div className={styles.badgesRight}>
          <span className={styles.sourceBadge}>✓ {testimonial.source}</span>
          {doctor && <span className={styles.doctorBadge}>🩺 {doctor}</span>}
          {showCamera && (
            <span className={styles.photoBadge}>
              📷 {testimonial.photoCount} photos
            </span>
          )}
        </div>
      </div>

      <div className={styles.ctaRow}>
        <span className={styles.viewCase}>View case ↗</span>
        {highlighted && <span className={styles.currentCase}>Current case</span>}
      </div>
    </article>
  );
};

