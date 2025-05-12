import { useTranslation } from "@/lib/i18n";
import { Check } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import { useLocation } from "wouter";

const SuccessModal = () => {
  const { t } = useTranslation();
  const { showSuccessModal, setShowSuccessModal } = useAppContext();
  const [, navigate] = useLocation();
  
  if (!showSuccessModal) return null;
  
  const handleClose = () => {
    setShowSuccessModal(false);
    navigate("/");
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={handleClose}
      />
      <div className="relative glass-effect rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl animate-float">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#8E2DE2]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-4xl text-[#8E2DE2]" />
          </div>
          <h2 className="text-2xl font-montserrat font-bold mb-4">
            {t("success.title")}
          </h2>
          <p className="text-gray-300 mb-6">
            {t("success.message")}
          </p>
          <button 
            onClick={handleClose}
            className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white font-medium py-2.5 px-6 rounded-full hover:opacity-90 transition-opacity"
          >
            {t("success.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
