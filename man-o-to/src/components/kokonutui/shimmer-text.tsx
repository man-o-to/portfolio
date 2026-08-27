"use client";

/**
 * @author: @dorianbaffier
 * @description: Shimmer Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 *
 * Adapted for inline use: dropped the centered wrapper/entrance animation
 * and hardcoded heading size so it can sit inline in a paragraph, and swapped
 * the neutral gradient for an accent color so it reads as a "thinking"
 * highlight rather than a heading.
 */

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  text: string;
  className?: string;
}

export default function ShimmerText({ text, className }: ShimmerTextProps) {
  return (
    <motion.span
      animate={{
        backgroundPosition: ["200% center", "-200% center"],
      }}
      className={cn(
        "bg-[length:200%_100%] bg-gradient-to-r from-muted-foreground via-[#d97757] to-muted-foreground bg-clip-text text-transparent",
        className
      )}
      transition={{
        duration: 6,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      {text}
    </motion.span>
  );
}
