import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { useAppContext } from "@/contexts/AppContext";
import StepsIndicator from "@/components/StepsIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, WandSparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const { avatarData, setAvatarData, currentStep, setCurrentStep } = useAppContext();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  const [preview, setPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);
  
  // Reset step to 1 when accessing home page
  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };
  
  const validateAndSetFile = (file: File) => {
    try {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "Файл слишком большой. Максимальный размер 10MB",
          variant: "destructive",
        });
        return;
      }
      
      // Check file type
      const fileType = file.type;
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(fileType)) {
        toast({
          title: "Разрешены только JPG, PNG и GIF файлы",
          variant: "destructive",
        });
        return;
      }
      
      // Set file to context and create preview
      setAvatarData(prev => ({ ...prev, file }));
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      
      // Cleanup function to revoke object URL when component unmounts
      return () => URL.revokeObjectURL(previewUrl);
    } catch (error) {
      console.error("Error processing file:", error);
      toast({
        title: "Ошибка при обработке файла",
        description: "Пожалуйста, попробуйте другой файл",
        variant: "destructive",
      });
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  
  const handleDragLeave = () => {
    setDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };
  
  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAvatarData(prev => ({ ...prev, prompt: e.target.value }));
  };
  
  const handleGeneratePreview = () => {
    if (!avatarData.file) {
      toast({
        title: "Необходимо загрузить фото",
        description: "Пожалуйста, загрузите фотографию",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to preview page
    navigate("/preview");
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 cosmic-gradient-text">
          Создайте свою 3D фигурку
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Загрузите ваше фото и мы превратим его в персонализированную 3D фигурку в космическом стиле
        </p>
      </div>

      <StepsIndicator currentStep={currentStep} />

      <div className="glass-effect rounded-xl p-6 md:p-8 shadow-lg mb-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-montserrat font-semibold mb-6">
          Шаг 1: Загрузите ваше фото
        </h2>
        
        <div className="mb-6">
          <div 
            ref={dropAreaRef}
            className={`border-2 border-dashed ${dragging ? 'border-[#8E2DE2]' : 'border-gray-600 hover:border-[#8E2DE2]'} rounded-xl p-8 text-center cursor-pointer transition-colors`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Input 
              type="file" 
              className="hidden" 
              ref={fileInputRef} 
              accept=".jpg,.jpeg,.png,.gif" 
              onChange={handleFileChange} 
            />
            
            {!preview ? (
              <>
                <Upload className="h-16 w-16 mx-auto mb-4 text-[#8E2DE2]" />
                <div className="upload-prompt">
                  <p className="mb-2 font-medium">Перетащите файл сюда или</p>
                  <Button 
                    variant="default"
                    className="bg-[#8E2DE2] hover:bg-[#4A00E0] text-white font-medium rounded-full"
                  >
                    Выбрать файл
                  </Button>
                  <p className="mt-3 text-sm text-gray-400">JPG, PNG или GIF, максимум 10MB</p>
                </div>
              </>
            ) : (
              <div className="file-details mb-4">
                <div className="flex justify-center items-center mb-2">
                  <div className="w-24 h-24 bg-space-deeper rounded-lg overflow-hidden">
                    <img 
                      src={preview} 
                      alt="Preview" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <p className="text-sm font-medium text-white">
                  {avatarData.file?.name}
                </p>
                <span className="text-xs text-gray-400">
                  {formatFileSize(avatarData.file?.size || 0)}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="prompt" className="block text-sm font-medium mb-2">
            Дополнительные настройки (необязательно)
          </label>
          <Textarea 
            id="prompt" 
            rows={3} 
            value={avatarData.prompt}
            onChange={handlePromptChange}
            className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 text-white focus:border-[#8E2DE2] transition-all" 
            placeholder="Например, в одежде смокинга, изменить цвет волос..."
          />
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleGeneratePreview}
            className="flex items-center bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white font-medium py-2.5 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#8E2DE2]/20"
          >
            <WandSparkles className="mr-2 h-4 w-4" />
            Сгенерировать предпросмотр
          </Button>
        </div>
      </div>
    </div>
  );
};

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' bytes';
  else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  else return (bytes / 1048576).toFixed(1) + ' MB';
};

export default Home;