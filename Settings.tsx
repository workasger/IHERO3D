import { useEffect } from "react";
import { useTranslation } from "@/lib/i18n";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { useAppContext } from "@/contexts/AppContext";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Moon, Globe, Sparkles } from "lucide-react";

const Settings = () => {
  const { t, language } = useTranslation();
  const { setLanguage } = useLanguageContext();
  const { theme, setTheme } = useTheme();
  const { animationsEnabled, setAnimationsEnabled } = useAppContext();
  
  // Set theme based on system preference on first load if not set manually
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, [setTheme]);
  
  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };
  
  const handleLanguageChange = (value: string) => {
    setLanguage(value as "ru" | "en" | "es");
  };
  
  const handleAnimationToggle = (checked: boolean) => {
    setAnimationsEnabled(checked);
    localStorage.setItem("animations", checked ? "enabled" : "disabled");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 cosmic-gradient-text">
          {t("settings.title")}
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t("settings.subtitle")}
        </p>
      </div>

      <div className="glass-effect rounded-xl p-6 md:p-8 shadow-lg mb-10 max-w-xl mx-auto">
        <div className="space-y-8">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <Label htmlFor="theme-toggle" className="font-medium flex items-center">
              <Moon className="mr-3 text-xl text-[#8E2DE2]" />
              {t("settings.darkTheme")}
            </Label>
            <Switch 
              id="theme-toggle" 
              checked={theme === "dark"}
              onCheckedChange={handleThemeToggle}
            />
          </div>
          
          {/* Language Selector */}
          <div>
            <Label className="font-medium flex items-center mb-3">
              <Globe className="mr-3 text-xl text-[#8E2DE2]" />
              {t("settings.language")}
            </Label>
            <div className="relative">
              <Select 
                value={language} 
                onValueChange={handleLanguageChange}
              >
                <SelectTrigger className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg text-white focus:border-[#8E2DE2] transition-all">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ru">Русский</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="mt-4 grid grid-cols-3 gap-2">
                <button 
                  className={`language-option flex items-center justify-center ${
                    language === "ru" 
                      ? "bg-[#8E2DE2]/20 border border-[#8E2DE2]/50" 
                      : "bg-[#1A1A1A] border border-gray-700 hover:border-[#8E2DE2]/30"
                  } rounded-lg p-2 text-sm transition-colors`}
                  onClick={() => handleLanguageChange("ru")}
                >
                  <span className="mr-2">🇷🇺</span>
                  Русский
                </button>
                <button 
                  className={`language-option flex items-center justify-center ${
                    language === "en" 
                      ? "bg-[#8E2DE2]/20 border border-[#8E2DE2]/50" 
                      : "bg-[#1A1A1A] border border-gray-700 hover:border-[#8E2DE2]/30"
                  } rounded-lg p-2 text-sm transition-colors`}
                  onClick={() => handleLanguageChange("en")}
                >
                  <span className="mr-2">🇬🇧</span>
                  English
                </button>
                <button 
                  className={`language-option flex items-center justify-center ${
                    language === "es" 
                      ? "bg-[#8E2DE2]/20 border border-[#8E2DE2]/50" 
                      : "bg-[#1A1A1A] border border-gray-700 hover:border-[#8E2DE2]/30"
                  } rounded-lg p-2 text-sm transition-colors`}
                  onClick={() => handleLanguageChange("es")}
                >
                  <span className="mr-2">🇪🇸</span>
                  Español
                </button>
              </div>
            </div>
          </div>
          
          {/* Animation Control */}
          <div className="flex items-center justify-between">
            <Label htmlFor="animation-toggle" className="font-medium flex items-center">
              <Sparkles className="mr-3 text-xl text-[#8E2DE2]" />
              {t("settings.animations")}
            </Label>
            <Switch 
              id="animation-toggle" 
              checked={animationsEnabled}
              onCheckedChange={handleAnimationToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
