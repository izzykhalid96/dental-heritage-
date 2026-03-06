"use client";

import React from "react";
import styles from "./button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${
        variant === "primary" ? styles.primary : styles.ghost
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

