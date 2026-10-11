"use client";

import { createContext, useRef, useContext, type RefObject } from "react";

type ScrollContextType = {
  topArticle: RefObject<HTMLElement | null>;
  sportArticle: RefObject<HTMLElement | null>;
  ecomicArticle: RefObject<HTMLElement | null>;
  techArticle: RefObject<HTMLElement | null>;
  healthArticle: RefObject<HTMLElement | null>;
  scientArticle: RefObject<HTMLElement | null>;
  scrollIntoView: (elementRef: RefObject<HTMLElement | null>) => void;
};
const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const topArticle = useRef<HTMLElement>(null);
  const sportArticle = useRef<HTMLElement>(null);
  const ecomicArticle = useRef<HTMLElement>(null);
  const techArticle = useRef<HTMLElement>(null);
  const healthArticle = useRef<HTMLElement>(null);
  const scientArticle = useRef<HTMLElement>(null);

  const scrollIntoView = (elementRef: React.RefObject<HTMLElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        topArticle,
        sportArticle,
        ecomicArticle,
        techArticle,
        healthArticle,
        scientArticle,
        scrollIntoView,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("Errors !");
  }

  return ctx;
};
