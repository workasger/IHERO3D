import React from 'react';
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AppProvider } from "./contexts/AppContext";
import App from "./App";

// Root component where all providers are wrapped
const Root = () => {
  return (
    <React.StrictMode>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <LanguageProvider>
          <AppProvider>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <Toaster />
                <App />
              </TooltipProvider>
            </QueryClientProvider>
          </AppProvider>
        </LanguageProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<Root />);
}
