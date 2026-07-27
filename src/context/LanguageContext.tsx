"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { enMessages, MessagesType } from "@/messages/en";
import { amMessages } from "@/messages/am";

export type Locale = "en" | "am";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (keyPath: string, params?: Record<string, string>) => string;
  messages: MessagesType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load stored locale on client mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("hydrofix_locale") as Locale;
    if (savedLocale === "en" || savedLocale === "am") {
      setLocaleState(savedLocale);
    }
  }, []);

  // Sync html lang attribute and localStorage
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("hydrofix_locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "am" : "en");
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const activeMessages = locale === "am" ? amMessages : enMessages;

  // Keypath translation resolver with automatic English fallback & array support
  const t = (keyPath: string, params?: Record<string, string>): string => {
    const keys = keyPath.split(".");
    
    // 1. Resolve in active locale
    let val: any = activeMessages;
    for (const k of keys) {
      if (val !== undefined && val !== null && k in val) {
        val = val[k];
      } else {
        val = undefined;
        break;
      }
    }

    // 2. Fallback to English if missing, empty, or not a string
    if (val === undefined || val === null || val === "" || typeof val !== "string") {
      let fallbackVal: any = enMessages;
      for (const k of keys) {
        if (fallbackVal !== undefined && fallbackVal !== null && k in fallbackVal) {
          fallbackVal = fallbackVal[k];
        } else {
          fallbackVal = undefined;
          break;
        }
      }
      val = typeof fallbackVal === "string" && fallbackVal !== "" ? fallbackVal : keyPath;
    }

    // 3. Replace template parameters (e.g. {name}, {service})
    if (params && typeof val === "string") {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        val = (val as string).replace(new RegExp(`\\{${paramKey}\\}`, "g"), paramValue);
      });
    }

    return typeof val === "string" ? val : keyPath;
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t,
        messages: activeMessages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
