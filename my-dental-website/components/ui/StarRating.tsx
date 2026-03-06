"use client";

import React from "react";

type Props = {
  rating: number;
};

export const StarRating: React.FC<Props> = ({ rating }) => {
  const fullStars = Math.round(rating);

  return (
    <div aria-label={`${rating} out of 5 stars`} style={{ display: "flex", gap: "0.1rem" }}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <span key={idx} aria-hidden="true" className="text-yellow-500" style={{ fontSize: "0.8rem" }}>
          {idx < fullStars ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

