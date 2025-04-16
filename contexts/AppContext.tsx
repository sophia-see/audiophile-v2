"use client"

import { createContext, useContext } from "react";

interface AppContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (prev: boolean) => void;
  isCartOpen: boolean;
  setIsCartOpen: (prev: boolean) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}