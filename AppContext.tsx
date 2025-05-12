import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface AvatarData {
  file: File | null;
  prompt: string;
}

interface AppContextType {
  avatarData: AvatarData;
  setAvatarData: React.Dispatch<React.SetStateAction<AvatarData>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  showSuccessModal: boolean;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  animationsEnabled: boolean;
  setAnimationsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context with a default value instead of undefined
const defaultContextValue: AppContextType = {
  avatarData: { file: null, prompt: "" },
  setAvatarData: () => {},
  currentStep: 1,
  setCurrentStep: () => {},
  showSuccessModal: false,
  setShowSuccessModal: () => {},
  animationsEnabled: true,
  setAnimationsEnabled: () => {},
};

const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [avatarData, setAvatarData] = useState<AvatarData>({
    file: null,
    prompt: "",
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Initialize animations from localStorage if available
  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    try {
      const savedAnimation = localStorage.getItem('animations');
      return savedAnimation === 'disabled' ? false : true;
    } catch (e) {
      console.warn("Could not access localStorage:", e);
      return true;
    }
  });
  
  // Save animations state to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('animations', animationsEnabled ? 'enabled' : 'disabled');
    } catch (e) {
      console.warn("Could not write to localStorage:", e);
    }
  }, [animationsEnabled]);

  const value = {
    avatarData, 
    setAvatarData,
    currentStep,
    setCurrentStep,
    showSuccessModal,
    setShowSuccessModal,
    animationsEnabled,
    setAnimationsEnabled,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
