// components/animated-card.tsx
"use client"

import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming these are the ShadCN Card components
import { cn } from "@/lib/utils";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  whileHoverScale?: number
  initialY?: number
  initialOpacity?: number
  delay?: number
}

const cardVariants = {
  hidden: (custom: { initialY?: number; initialOpacity?: number }) => ({
    y: custom.initialY ?? 20,
    opacity: custom.initialOpacity ?? 0,
  }),
  visible: (custom: { delay?: number }) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom.delay ?? 0,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export const AnimatedCard = ({
  children,
  className,
  whileHoverScale = 1.03, // Default hover scale
  initialY = 20,
  initialOpacity = 0,
  delay = 0,
  ...props
}: AnimatedCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: whileHoverScale, transition: { duration: 0.2 } }}
      custom={{ initialY, initialOpacity, delay }}
      className={cn(className)} // Base Card component will be a child
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Optional: Export sub-components if you want to use them directly with AnimatedCard as a wrapper
// However, it's generally better to pass the composed Card as a child.
export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };

