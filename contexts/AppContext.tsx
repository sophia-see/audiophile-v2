"use client"

import React from "react";
import { createContext } from "react";

interface AppContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (prev: boolean) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}