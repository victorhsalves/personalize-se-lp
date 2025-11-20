"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  target,
  rel,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "block text-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#C97A65] text-white hover:bg-[#B28D8B] shadow-md hover:shadow-lg",
    secondary: "bg-[#B28D8B] text-white hover:bg-[#A66B5B] shadow-md hover:shadow-lg",
    outline: "border-2 border-[#C97A65] text-[#C97A65] hover:bg-[#C97A65] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  const buttonContent = (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClasses}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
}

