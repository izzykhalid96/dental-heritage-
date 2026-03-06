"use client";

import { motion, PanInfo } from "framer-motion";
import React, { useState } from "react";
import styles from "./slider.module.css";

type Props = {
  style?: React.CSSProperties;
  dragConstraints: React.RefObject<HTMLDivElement>;
  onDrag: (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
};

export const SliderHandle: React.FC<Props> = ({
  style,
  dragConstraints,
  onDrag
}) => {
  const [dragging, setDragging] = useState(false);

  return (
    <motion.button
      type="button"
      className={styles.handle}
      style={{
        ...style,
        willChange: dragging ? "transform" : "auto"
      }}
      drag="x"
      dragConstraints={dragConstraints}
      dragElastic={0}
      dragMomentum={false}
      onDrag={onDrag}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      whileHover={{
        scale: 1.2,
        boxShadow: "0 0 0 4px rgba(45,138,138,0.45)"
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Drag to compare before and after"
    >
      <span className={styles.handleLabel}>
        ◄ <span>DRAG</span> ►
      </span>
    </motion.button>
  );
};

