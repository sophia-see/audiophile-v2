"use client"

import { AppContext } from "@/contexts/AppContext";
import { usePathname } from "next/navigation";
import React from "react";

interface AppContextProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppContextProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname])

  return (
    <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
}