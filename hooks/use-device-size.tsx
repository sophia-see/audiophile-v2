"use client"

import { useState, useEffect, useMemo } from 'react';

export default function useDeviceSize() {
  // Set an initial width based on a safe assumption for SSR
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    // Ensure this runs only on the client
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth(); // Set initial width on mount
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const sizes = useMemo(() => {
    if (width === null) return { isMobile: false, isTablet: false, isDesktop: false, currSize: "mobile" }; // Default SSR-safe value

    const isMobile = width < 768
    const isTablet = width >= 768 && width < 1024
    const isDesktop = width >= 1024
    const currSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    return {
      isMobile,
      isTablet,
      isDesktop,
      currSize
    }
  }, [width])


  return {
    width,
    ...sizes
  };
}