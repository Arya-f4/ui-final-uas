"use client"

import { useEffect, useState } from "react";

/**
 * A custom hook to detect if the user is on a mobile device based on screen width.
 * @returns {boolean} - True if the screen width is 768px or less, false otherwise.
 */
export const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This hook should only run on the client side where `window` is available.
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Handler for media query changes
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    
    // Set the initial state
    setIsMobile(mediaQuery.matches);

    // Add the event listener for future changes
    try {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    } catch (e) {
      // Fallback for older browsers
      mediaQuery.addListener(handleMediaQueryChange);
    }

    // Cleanup the listener when the component unmounts
    return () => {
      try {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      } catch (e) {
        // Fallback for older browsers
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleanup on unmount

  return isMobile;
};
