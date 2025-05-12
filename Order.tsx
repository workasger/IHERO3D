import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAppContext } from "@/contexts/AppContext";
import StepsIndicator from "@/components/StepsIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Info, SendIcon } from "lucide-react";

const Order = () => {
  const { avatarData, setCurrentStep, setShowSuccessModal } = useAppContext();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Set current step
  useEffect(() => {
    setCurrentStep(4);
    
    // Redirect if no file is selected
    if (!avatarData.file) {
      navigate("/");
    }
  }, [avatarData.file, navigate, setCurrentStep]);
  
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name.trim()) {
      toast({
        title: "Это поле обязательно",
        description: "Пожалуйста, введите ваше имя",
        variant: "destructive",
      });
      return;
    }
    
    if (!phone.trim()) {
      toast({
        title: "Это поле обязательно",
        description: "Пожалуйста, введите ваш номер телефона",
        variant: "destructive",
      });
      return;
    }
    
    if (!email.trim()) {
      toast({
        title: "Это поле обязательно",
        description: "Пожалуйста, введите ваш email",
        variant: "destructive",
      });
      return;
    }
    
    if (!validateEmail(email)) {
      toast({
        title: "Введите корректный email адрес",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1500);
  };
  
  if (!avatarData.file) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 cosmic-gradient-text">
          Оформление заказа
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Заполните данные для получения готовой 3D фигурки
        </p>
      </div>

      <StepsIndicator currentStep={4} />

      <div className="glass-effect rounded-xl p-6 md:p-8 shadow-lg mb-10 max-w-xl mx-auto">
        <h2 className="text-xl font-montserrat font-semibold mb-6">
          Шаг 4: Контактные данные
        </h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Имя и Фамилия</Label>
            <Input 
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white focus:border-[#8E2DE2] focus:ring focus:ring-[#8E2DE2]/20 transition-all"
              placeholder="Иван Иванов"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <Input 
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white focus:border-[#8E2DE2] focus:ring focus:ring-[#8E2DE2]/20 transition-all"
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Электронный адрес для получения модели</Label>
            <Input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white focus:border-[#8E2DE2] focus:ring focus:ring-[#8E2DE2]/20 transition-all"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="pt-2">
            <div className="bg-[#8E2DE2]/10 border border-[#8E2DE2]/20 rounded-lg p-4 text-sm">
              <p className="flex items-start">
                <Info className="h-4 w-4 text-[#8E2DE2] mt-0.5 mr-2" />
                <span>Генерация окончательной 3D модели высокого качества обычно занимает 20-40 минут. Мы отправим вам email, когда модель будет готова.</span>
              </p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white font-medium py-3 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#8E2DE2]/20"
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <SendIcon className="mr-2 h-4 w-4" />
              )}
              Отправить заказ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;