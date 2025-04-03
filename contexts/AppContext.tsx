"use client"

import React from "react";
import { createContext } from "react";

interface AppContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (prev: boolean) => void;
}

const AppContext = createContext<AppContextProps | null>(null);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppContextProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}