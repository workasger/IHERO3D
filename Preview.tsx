import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAppContext } from "@/contexts/AppContext";
import StepsIndicator from "@/components/StepsIndicator";
import { Button } from "@/components/ui/button";
import { RefreshCw, Check } from "lucide-react";

const Preview = () => {
  const { avatarData, setCurrentStep } = useAppContext();
  const [, navigate] = useLocation();

  // Placeholder for the generated image
  const generatedAvatarUrl = "https://pixabay.com/get/gcb4b3d68146ca5b085d6db781a11395420d0d3dadb2f42a7303a369bf6809ab8a4329dea923431aa049d07a12cbb3cf0ade75feb092daf7ea71e4452d911b7b7_1280.jpg";
  
  // Set current step
  useEffect(() => {
    setCurrentStep(2);
    
    // Redirect if no file is selected
    if (!avatarData.file) {
      navigate("/");
    }
  }, [avatarData.file, navigate, setCurrentStep]);
  
  const handleRegenerateAvatar = () => {
    navigate("/");
  };
  
  const handleConfirmAvatar = () => {
    navigate("/model");
  };

  // Generate a preview URL for the uploaded file
  const uploadedImageUrl = avatarData.file ? URL.createObjectURL(avatarData.file) : "";
  
  // Clean up the URL when component unmounts
  useEffect(() => {
    return () => {
      if (uploadedImageUrl) {
        URL.revokeObjectURL(uploadedImageUrl);
      }
    };
  }, [uploadedImageUrl]);
  
  if (!avatarData.file) return null;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 cosmic-gradient-text">
          Предпросмотр 3D фигурки
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Посмотрите, как будет выглядеть ваша космическая 3D фигурка
        </p>
      </div>

      <StepsIndicator currentStep={2} />

      <div className="glass-effect rounded-xl p-6 md:p-8 shadow-lg mb-10 max-w-3xl mx-auto">
        <h2 className="text-xl font-montserrat font-semibold mb-6">
          Шаг 2: Оцените предварительный результат
        </h2>
        
        <div className="preview-container flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/2 flex flex-col">
            <p className="text-sm text-gray-300 mb-2">Ваше исходное фото</p>
            <div className="aspect-square rounded-lg bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-cover bg-center">
                <img 
                  src={uploadedImageUrl} 
                  alt="Исходное фото" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col">
            <p className="text-sm text-gray-300 mb-2">Сгенерированная 3D фигурка</p>
            <div className="aspect-square rounded-lg bg-[#1A1A1A] flex items-center justify-center overflow-hidden animate-pulse-glow">
              <div className="w-full h-full bg-space-deeper flex items-center justify-center">
                <img 
                  src={generatedAvatarUrl} 
                  alt="Сгенерированная 3D фигурка" 
                  className="object-cover w-full h-full" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="prompt-container mb-6">
          <label className="block text-sm font-medium mb-2">Ваш запрос:</label>
          <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-gray-300 text-sm">
            <p>{avatarData.prompt || "Например, в одежде смокинга, изменить цвет волос..."}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Button
            variant="outline"
            className="flex items-center justify-center border border-gray-700 hover:border-[#8E2DE2] text-white font-medium"
            onClick={handleRegenerateAvatar}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Сгенерировать заново
          </Button>
          <Button
            className="flex items-center justify-center bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#8E2DE2]/20"
            onClick={handleConfirmAvatar}
          >
            <Check className="mr-2 h-4 w-4" />
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;