import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAppContext } from "@/contexts/AppContext";
import StepsIndicator from "@/components/StepsIndicator";
import { Button } from "@/components/ui/button";
import { Box, ZoomIn, CheckCheck } from "lucide-react";

const Model = () => {
  const { avatarData, setCurrentStep } = useAppContext();
  const [, navigate] = useLocation();
  const [rotation, setRotation] = useState(0);
  
  // Placeholder for the 3D model render
  const modelRenderUrl = "https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
  
  // Set current step
  useEffect(() => {
    setCurrentStep(3);
    
    // Redirect if no file is selected
    if (!avatarData.file) {
      navigate("/");
    }
  }, [avatarData.file, navigate, setCurrentStep]);
  
  const handleCompleteOrder = () => {
    navigate("/order");
  };

  // Simulate model rotation
  const handleRotate = () => {
    setRotation(prev => (prev + 45) % 360);
  };
  
  if (!avatarData.file) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 cosmic-gradient-text">
          3D Модель фигурки
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ваша персонализированная 3D фигурка готова для просмотра
        </p>
      </div>

      <StepsIndicator currentStep={3} />

      <div className="glass-effect rounded-xl p-6 md:p-8 shadow-lg mb-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-montserrat font-semibold mb-6">
          Шаг 3: Просмотр 3D модели
        </h2>
        
        <div className="model-viewer bg-[#1A1A1A] rounded-lg p-4 mb-8">
          <div className="aspect-video w-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <img 
                src={modelRenderUrl} 
                alt="3D модель фигурки" 
                className="w-full h-full object-cover rounded"
                style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-3">
            <Button
              variant="outline" 
              size="sm"
              className="text-sm text-gray-300 bg-[#1A1A1A] border border-gray-700 hover:border-[#8E2DE2] transition-colors"
              onClick={handleRotate}
            >
              <Box className="h-4 w-4 mr-1" /> Вращать
            </Button>
            <Button
              variant="outline" 
              size="sm"
              className="text-sm text-gray-300 bg-[#1A1A1A] border border-gray-700 hover:border-[#8E2DE2] transition-colors"
            >
              <ZoomIn className="h-4 w-4 mr-1" /> Масштаб
            </Button>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button
            className="flex items-center bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white font-medium py-2.5 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#8E2DE2]/20"
            onClick={handleCompleteOrder}
          >
            <CheckCheck className="mr-2 h-4 w-4" />
            Завершить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Model;