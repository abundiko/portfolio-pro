"use client";

import { LegacyRef, ReactNode, createContext, useRef } from "react";

const dummyContext = {
  section: null
};

export type HeroContextProps = { section: LegacyRef<HTMLDivElement> };

const HeroContext = createContext(dummyContext as HeroContextProps);

export function HeroContextProvider({ children }: { children: ReactNode }) {
  const section = useRef<HTMLDivElement>(null);
  return (
    <HeroContext.Provider
      value={{
        section
      }}
    >
      {children}
    </HeroContext.Provider>
  );
}

export default HeroContext;
