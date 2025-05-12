import { useState } from "react";
import { useLocation, Link } from "wouter";
import { useTranslation } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine active tab based on current location
  const isActiveTab = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="glass-effect sticky top-0 z-50 py-3 px-4 md:px-8 mb-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-2xl font-bold font-montserrat text-white flex items-center cursor-pointer">
              <span className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text">IHERO</span>
              <span className="ml-1">3D AI</span>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/">
            <button 
              className={`py-2 px-1 border-b-2 transition-all ${
                isActiveTab("/") 
                  ? "text-white border-[#8E2DE2] opacity-90"
                  : "text-gray-400 border-transparent hover:text-white hover:border-[#8E2DE2]/50"
              }`}
            >
              {t("navbar.home")}
            </button>
          </Link>
          <Link href="/settings">
            <button 
              className={`py-2 px-1 border-b-2 transition-all ${
                isActiveTab("/settings") 
                  ? "text-white border-[#8E2DE2] opacity-90"
                  : "text-gray-400 border-transparent hover:text-white hover:border-[#8E2DE2]/50"
              }`}
            >
              {t("navbar.settings")}
            </button>
          </Link>
          <Link href="/help">
            <button 
              className={`py-2 px-1 border-b-2 transition-all ${
                isActiveTab("/help") 
                  ? "text-white border-[#8E2DE2] opacity-90"
                  : "text-gray-400 border-transparent hover:text-white hover:border-[#8E2DE2]/50"
              }`}
            >
              {t("navbar.help")}
            </button>
          </Link>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="text-white p-1">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-2 space-y-3 text-center">
          <Link href="/">
            <button 
              className={`block w-full py-2 ${isActiveTab("/") ? "text-white font-medium" : "text-gray-400 hover:text-white"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.home")}
            </button>
          </Link>
          <Link href="/settings">
            <button 
              className={`block w-full py-2 ${isActiveTab("/settings") ? "text-white font-medium" : "text-gray-400 hover:text-white"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.settings")}
            </button>
          </Link>
          <Link href="/help">
            <button 
              className={`block w-full py-2 ${isActiveTab("/help") ? "text-white font-medium" : "text-gray-400 hover:text-white"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.help")}
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
