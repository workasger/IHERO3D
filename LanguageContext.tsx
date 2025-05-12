import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { LanguageCode, getTranslations } from "@/lib/i18n";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageCode>>;
}

// Default context value
const defaultLanguageContext: LanguageContextType = {
  language: "ru",
  setLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default language is Russian
  const [language, setLanguage] = useState<LanguageCode>("ru");

  // Load language from localStorage on first render if available
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as LanguageCode | null;
      if (savedLanguage && ["ru", "en", "es"].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    } catch (e) {
      console.warn("Could not access localStorage for language:", e);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("language", language);
      
      // Update document language for accessibility
      document.documentElement.lang = language;
      
      // Update page title based on language
      document.title = getTranslations(language).pageTitle;
    } catch (e) {
      console.warn("Could not save language settings:", e);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
