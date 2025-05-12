import { useLanguageContext } from "@/contexts/LanguageContext";

export type LanguageCode = "ru" | "en" | "es";

interface Translations {
  pageTitle: string;
  navbar: {
    home: string;
    settings: string;
    help: string;
  };
  steps: {
    upload: string;
    preview: string;
    model: string;
    order: string;
  };
  home: {
    title: string;
    subtitle: string;
    step1Title: string;
    uploadPrompt: string;
    dragAndDrop: string;
    selectFile: string;
    fileSizeInfo: string;
    additionalSettings: string;
    promptPlaceholder: string;
    generateButton: string;
  };
  preview: {
    title: string;
    subtitle: string;
    step2Title: string;
    originalPhoto: string;
    generatedAvatar: string;
    yourPrompt: string;
    changePrompt: string;
    confirmResult: string;
  };
  model: {
    title: string;
    subtitle: string;
    step3Title: string;
    rotate: string;
    zoom: string;
    download: string;
    completeOrder: string;
  };
  order: {
    title: string;
    subtitle: string;
    step4Title: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    processingInfo: string;
    submitButton: string;
  };
  settings: {
    title: string;
    subtitle: string;
    darkTheme: string;
    language: string;
    animations: string;
  };
  help: {
    title: string;
    subtitle: string;
    processingTime: string;
    howItWorks: {
      title: string;
      content: string;
    };
    photoRequirements: {
      title: string;
      content: string;
    };
    additionalSettings: {
      title: string;
      content: string;
    };
    modelFormat: {
      title: string;
      content: string;
    };
    contact: {
      title: string;
      email: string;
      instagram: string;
    };
  };
  success: {
    title: string;
    message: string;
    button: string;
  };
  validation: {
    required: string;
    invalidEmail: string;
    fileTooBig: string;
    invalidFileType: string;
  };
}

const russianTranslations: Translations = {
  pageTitle: "IHERO 3D AI - Создайте свой 3D аватар",
  navbar: {
    home: "Главная",
    settings: "Настройки",
    help: "Помощь",
  },
  steps: {
    upload: "Загрузка",
    preview: "Предпросмотр",
    model: "3D Модель",
    order: "Заказ",
  },
  home: {
    title: "Создайте свою 3D фигурку",
    subtitle: "Загрузите ваше фото и мы превратим его в персонализированную 3D фигурку в космическом стиле",
    step1Title: "Шаг 1: Загрузите ваше фото",
    uploadPrompt: "Перетащите файл сюда или",
    dragAndDrop: "Перетащите файл сюда или",
    selectFile: "Выбрать файл",
    fileSizeInfo: "JPG, PNG или GIF, максимум 10MB",
    additionalSettings: "Дополнительные настройки (необязательно)",
    promptPlaceholder: "Например, в одежде смокинга, изменить цвет волос...",
    generateButton: "Сгенерировать предпросмотр",
  },
  preview: {
    title: "Предпросмотр аватара",
    subtitle: "Посмотрите, как будет выглядеть ваш космический аватар",
    step2Title: "Шаг 2: Оцените предварительный результат",
    originalPhoto: "Ваше исходное фото",
    generatedAvatar: "Сгенерированный аватар",
    yourPrompt: "Ваш запрос:",
    changePrompt: "Изменить запрос",
    confirmResult: "Подтвердить результат",
  },
  model: {
    title: "3D Модель аватара",
    subtitle: "Ваш персонализированный 3D аватар готов для просмотра",
    step3Title: "Шаг 3: Просмотр 3D модели",
    rotate: "Вращать",
    zoom: "Масштаб",
    download: "Скачать .OBJ",
    completeOrder: "Завершить заказ",
  },
  order: {
    title: "Оформление заказа",
    subtitle: "Заполните данные для получения готовой 3D модели",
    step4Title: "Шаг 4: Контактные данные",
    nameLabel: "Ваше имя",
    namePlaceholder: "Иван Иванов",
    emailLabel: "Email для получения модели",
    emailPlaceholder: "your@email.com",
    processingInfo: "Генерация окончательной 3D модели высокого качества обычно занимает 20-40 минут. Мы отправим вам email, когда модель будет готова.",
    submitButton: "Отправить заказ",
  },
  settings: {
    title: "Настройки",
    subtitle: "Персонализируйте приложение под свои предпочтения",
    darkTheme: "Темная тема",
    language: "Язык интерфейса",
    animations: "Космическая анимация",
  },
  help: {
    title: "Помощь",
    subtitle: "Ответы на часто задаваемые вопросы",
    processingTime: "Хотя предварительный просмотр генерируется почти мгновенно, создание окончательного 3D-аватара высокого качества обычно занимает 20–40 минут. Вы получите электронное письмо с готовой моделью, как только она будет готова.",
    howItWorks: {
      title: "Как работает IHERO 3D AI?",
      content: "Наша технология использует искусственный интеллект для анализа вашего фото и создания персонализированного 3D аватара. Мы используем передовые алгоритмы для детального воссоздания черт лица и стилизации в космическом стиле.",
    },
    photoRequirements: {
      title: "Каковы требования к фотографии?",
      content: "Для лучших результатов используйте чёткое фото лица с хорошим освещением. Избегайте фотографий с закрытыми частями лица, солнцезащитными очками или головными уборами. Поддерживаемые форматы: JPG, PNG и GIF размером до 10МБ.",
    },
    additionalSettings: {
      title: "Что означает поле \"Дополнительные настройки\"?",
      content: "В этом поле вы можете указать детали для персонализации вашего аватара: изменение одежды, прически, цвета волос или добавление аксессуаров. Чем точнее ваш запрос, тем лучше результат.",
    },
    modelFormat: {
      title: "В каком формате я получу готовую 3D модель?",
      content: "Готовая модель будет доступна в формате .OBJ, который поддерживается большинством 3D-редакторов и приложений. Вы также получите текстуры и материалы для модели.",
    },
    contact: {
      title: "Свяжитесь с нами",
      email: "support@ihero3d.com",
      instagram: "@ihero3d",
    },
  },
  success: {
    title: "Заказ успешно отправлен!",
    message: "Ваша 3D модель генерируется. Мы отправим её на указанный email в течение 20-40 минут.",
    button: "Вернуться на главную",
  },
  validation: {
    required: "Это поле обязательно",
    invalidEmail: "Введите корректный email адрес",
    fileTooBig: "Файл слишком большой. Максимальный размер 10MB",
    invalidFileType: "Разрешены только JPG, PNG и GIF файлы",
  },
};

const englishTranslations: Translations = {
  pageTitle: "IHERO 3D AI - Create Your 3D Avatar",
  navbar: {
    home: "Home",
    settings: "Settings",
    help: "Help",
  },
  steps: {
    upload: "Upload",
    preview: "Preview",
    model: "3D Model",
    order: "Order",
  },
  home: {
    title: "Create Your 3D Avatar",
    subtitle: "Upload your photo and we will transform it into a personalized 3D avatar in cosmic style",
    step1Title: "Step 1: Upload Your Photo",
    uploadPrompt: "Drag and drop your file here or",
    dragAndDrop: "Drag and drop file here or",
    selectFile: "Select File",
    fileSizeInfo: "JPG, PNG or GIF, maximum 10MB",
    additionalSettings: "Additional Settings (optional)",
    promptPlaceholder: "For example, in a tuxedo, change hair color...",
    generateButton: "Generate Preview",
  },
  preview: {
    title: "Avatar Preview",
    subtitle: "See how your cosmic avatar will look",
    step2Title: "Step 2: Evaluate the Preliminary Result",
    originalPhoto: "Your Original Photo",
    generatedAvatar: "Generated Avatar",
    yourPrompt: "Your Prompt:",
    changePrompt: "Change Prompt",
    confirmResult: "Confirm Result",
  },
  model: {
    title: "3D Avatar Model",
    subtitle: "Your personalized 3D avatar is ready for viewing",
    step3Title: "Step 3: View 3D Model",
    rotate: "Rotate",
    zoom: "Zoom",
    download: "Download .OBJ",
    completeOrder: "Complete Order",
  },
  order: {
    title: "Order Completion",
    subtitle: "Fill in your details to receive the finished 3D model",
    step4Title: "Step 4: Contact Information",
    nameLabel: "Your Name",
    namePlaceholder: "John Smith",
    emailLabel: "Email to Receive the Model",
    emailPlaceholder: "your@email.com",
    processingInfo: "Creating the final high-quality 3D model usually takes 20-40 minutes. We will send you an email when the model is ready.",
    submitButton: "Submit Order",
  },
  settings: {
    title: "Settings",
    subtitle: "Customize the application to your preferences",
    darkTheme: "Dark Theme",
    language: "Interface Language",
    animations: "Cosmic Animation",
  },
  help: {
    title: "Help",
    subtitle: "Answers to frequently asked questions",
    processingTime: "While the preview is generated almost instantly, creating the final high-quality 3D avatar typically takes 20-40 minutes. You will receive an email with the finished model as soon as it is ready.",
    howItWorks: {
      title: "How does IHERO 3D AI work?",
      content: "Our technology uses artificial intelligence to analyze your photo and create a personalized 3D avatar. We use advanced algorithms for detailed recreation of facial features and cosmic style stylization.",
    },
    photoRequirements: {
      title: "What are the photo requirements?",
      content: "For best results, use a clear photo of your face with good lighting. Avoid photos with covered parts of the face, sunglasses, or headwear. Supported formats: JPG, PNG, and GIF up to 10MB.",
    },
    additionalSettings: {
      title: "What does the \"Additional Settings\" field mean?",
      content: "In this field, you can specify details to personalize your avatar: changing clothes, hairstyle, hair color, or adding accessories. The more precise your request, the better the result.",
    },
    modelFormat: {
      title: "What format will I receive the finished 3D model in?",
      content: "The finished model will be available in .OBJ format, which is supported by most 3D editors and applications. You will also receive textures and materials for the model.",
    },
    contact: {
      title: "Contact Us",
      email: "support@ihero3d.com",
      instagram: "@ihero3d",
    },
  },
  success: {
    title: "Order Successfully Submitted!",
    message: "Your 3D model is being generated. We will send it to the provided email within 20-40 minutes.",
    button: "Return to Home",
  },
  validation: {
    required: "This field is required",
    invalidEmail: "Enter a valid email address",
    fileTooBig: "File is too large. Maximum size is 10MB",
    invalidFileType: "Only JPG, PNG and GIF files are allowed",
  },
};

const spanishTranslations: Translations = {
  pageTitle: "IHERO 3D AI - Crea Tu Avatar 3D",
  navbar: {
    home: "Inicio",
    settings: "Ajustes",
    help: "Ayuda",
  },
  steps: {
    upload: "Subir",
    preview: "Vista Previa",
    model: "Modelo 3D",
    order: "Pedido",
  },
  home: {
    title: "Crea Tu Avatar 3D",
    subtitle: "Sube tu foto y la transformaremos en un avatar 3D personalizado con estilo cósmico",
    step1Title: "Paso 1: Sube Tu Foto",
    uploadPrompt: "Arrastra y suelta tu archivo aquí o",
    dragAndDrop: "Arrastra y suelta archivo aquí o",
    selectFile: "Seleccionar Archivo",
    fileSizeInfo: "JPG, PNG o GIF, máximo 10MB",
    additionalSettings: "Configuración Adicional (opcional)",
    promptPlaceholder: "Por ejemplo, con smoking, cambiar color de pelo...",
    generateButton: "Generar Vista Previa",
  },
  preview: {
    title: "Vista Previa del Avatar",
    subtitle: "Mira cómo se verá tu avatar cósmico",
    step2Title: "Paso 2: Evalúa el Resultado Preliminar",
    originalPhoto: "Tu Foto Original",
    generatedAvatar: "Avatar Generado",
    yourPrompt: "Tu Petición:",
    changePrompt: "Cambiar Petición",
    confirmResult: "Confirmar Resultado",
  },
  model: {
    title: "Modelo de Avatar 3D",
    subtitle: "Tu avatar 3D personalizado está listo para visualizar",
    step3Title: "Paso 3: Ver Modelo 3D",
    rotate: "Rotar",
    zoom: "Zoom",
    download: "Descargar .OBJ",
    completeOrder: "Completar Pedido",
  },
  order: {
    title: "Finalización del Pedido",
    subtitle: "Completa tus datos para recibir el modelo 3D terminado",
    step4Title: "Paso 4: Información de Contacto",
    nameLabel: "Tu Nombre",
    namePlaceholder: "Juan Pérez",
    emailLabel: "Email para Recibir el Modelo",
    emailPlaceholder: "tu@email.com",
    processingInfo: "La creación del modelo 3D final de alta calidad generalmente toma entre 20 y 40 minutos. Te enviaremos un email cuando el modelo esté listo.",
    submitButton: "Enviar Pedido",
  },
  settings: {
    title: "Ajustes",
    subtitle: "Personaliza la aplicación según tus preferencias",
    darkTheme: "Tema Oscuro",
    language: "Idioma de la Interfaz",
    animations: "Animación Cósmica",
  },
  help: {
    title: "Ayuda",
    subtitle: "Respuestas a preguntas frecuentes",
    processingTime: "Aunque la vista previa se genera casi instantáneamente, la creación del avatar 3D final de alta calidad generalmente toma entre 20 y 40 minutos. Recibirás un correo electrónico con el modelo terminado tan pronto como esté listo.",
    howItWorks: {
      title: "¿Cómo funciona IHERO 3D AI?",
      content: "Nuestra tecnología utiliza inteligencia artificial para analizar tu foto y crear un avatar 3D personalizado. Utilizamos algoritmos avanzados para la recreación detallada de las características faciales y la estilización en estilo cósmico.",
    },
    photoRequirements: {
      title: "¿Cuáles son los requisitos de la foto?",
      content: "Para obtener mejores resultados, utiliza una foto clara de tu rostro con buena iluminación. Evita fotos con partes del rostro cubiertas, gafas de sol o sombreros. Formatos soportados: JPG, PNG y GIF hasta 10MB.",
    },
    additionalSettings: {
      title: "¿Qué significa el campo \"Configuración Adicional\"?",
      content: "En este campo, puedes especificar detalles para personalizar tu avatar: cambiar ropa, peinado, color de pelo o añadir accesorios. Cuanto más precisa sea tu petición, mejor será el resultado.",
    },
    modelFormat: {
      title: "¿En qué formato recibiré el modelo 3D terminado?",
      content: "El modelo terminado estará disponible en formato .OBJ, que es compatible con la mayoría de los editores y aplicaciones 3D. También recibirás texturas y materiales para el modelo.",
    },
    contact: {
      title: "Contáctanos",
      email: "support@ihero3d.com",
      instagram: "@ihero3d",
    },
  },
  success: {
    title: "¡Pedido Enviado con Éxito!",
    message: "Tu modelo 3D se está generando. Te lo enviaremos al email proporcionado en un plazo de 20-40 minutos.",
    button: "Volver al Inicio",
  },
  validation: {
    required: "Este campo es obligatorio",
    invalidEmail: "Introduce un email válido",
    fileTooBig: "El archivo es demasiado grande. El tamaño máximo es 10MB",
    invalidFileType: "Solo se permiten archivos JPG, PNG y GIF",
  },
};

export const getTranslations = (language: LanguageCode): Translations => {
  switch (language) {
    case "en":
      return englishTranslations;
    case "es":
      return spanishTranslations;
    case "ru":
    default:
      return russianTranslations;
  }
};

export const useTranslation = () => {
  try {
    const { language } = useLanguageContext();
    
    const t = <K extends keyof Translations>(key: K): Translations[K] => {
      try {
        // Разделение ключа на составные части (например, "navbar.home" -> ["navbar", "home"])
        const keys = String(key).split(".");
        let value: any = getTranslations(language);
        
        // Последовательный доступ к свойствам объекта по ключам
        for (const k of keys) {
          if (value && typeof value === "object" && k in value) {
            value = value[k];
          } else {
            console.warn(`Translation key not found: ${key}`);
            return key as any; // Возвращаем ключ как запасной вариант
          }
        }
        
        return value;
      } catch (error) {
        console.error("Translation error:", error);
        return key as any; // Возвращаем ключ как запасной вариант
      }
    };
    
    return { t, language };
  } catch (error) {
    console.error("useTranslation error:", error);
    // Fallback функция перевода, которая просто возвращает ключ
    const t = <K extends keyof Translations>(key: K): Translations[K] => {
      return key as any;
    };
    
    return { t, language: "ru" as LanguageCode };
  }
};
