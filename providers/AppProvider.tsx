"use client"

import { AppContext } from "@/contexts/AppContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface AppContextProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppContextProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname])

  return (
    <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
}