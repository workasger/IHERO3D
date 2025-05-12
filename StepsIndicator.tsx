import { Check, ArrowRight } from "lucide-react";

interface StepsIndicatorProps {
  currentStep: number;
}

const StepsIndicator = ({ currentStep }: StepsIndicatorProps) => {
  const steps = [
    { id: 1, label: "Загрузка" },
    { id: 2, label: "Предпросмотр" },
    { id: 3, label: "3D Модель" },
    { id: 4, label: "Заказ" }
  ];
  
  return (
    <div className="relative steps-indicator flex items-center justify-center mb-8 max-w-3xl mx-auto px-4">
      {steps.map((step, index) => {
        // Is this step completed?
        const isCompleted = currentStep > step.id;
        // Is this the current step?
        const isCurrent = currentStep === step.id;
        // Is this a future step?
        const isFuture = currentStep < step.id;
        
        // If not the last step, we need an arrow after it
        const hasArrow = index < steps.length - 1;
        
        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isCompleted ? "bg-green-500 text-white" :
                isCurrent ? "bg-[#8E2DE2] text-white animate-pulse-glow" :
                "bg-gray-700 text-gray-400" 
              } font-medium`}>
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  step.id
                )}
              </div>
              <span className={`text-xs mt-2 ${isCurrent || isCompleted ? "text-white" : "text-gray-400"}`}>
                {step.label}
              </span>
            </div>
            
            {hasArrow && (
              <div className={`mx-2 md:mx-6 ${
                isCompleted ? "text-green-500" :
                isCurrent || (isCompleted && index === 0) ? "text-[#8E2DE2]" :
                "text-gray-700"
              }`}>
                <ArrowRight className="h-6 w-6" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepsIndicator;
