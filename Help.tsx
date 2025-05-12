import { useTranslation } from "@/lib/i18n";
import { Mail, Instagram } from "lucide-react";

const Help = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 cosmic-gradient-text">
          {t("help.title")}
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t("help.subtitle")}
        </p>
      </div>

      <div className="glass-effect rounded-xl p-6 md:p-8 shadow-lg mb-10 max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="bg-[#8E2DE2]/10 border border-[#8E2DE2]/20 rounded-lg p-5 mb-6">
            <p className="text-white leading-relaxed">
              {t("help.processingTime")}
            </p>
          </div>
          
          <div className="faq-item">
            <h3 className="font-montserrat font-semibold text-lg mb-2 flex items-center">
              <svg className="text-[#8E2DE2] mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9.00001C9.3251 8.33167 9.78915 7.76811 10.4 7.40914C11.0108 7.05016 11.7289 6.91892 12.4272 7.03871C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t("help.howItWorks.title")}
            </h3>
            <p className="text-gray-300 pl-6">
              {t("help.howItWorks.content")}
            </p>
          </div>
          
          <div className="faq-item">
            <h3 className="font-montserrat font-semibold text-lg mb-2 flex items-center">
              <svg className="text-[#8E2DE2] mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9.00001C9.3251 8.33167 9.78915 7.76811 10.4 7.40914C11.0108 7.05016 11.7289 6.91892 12.4272 7.03871C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t("help.photoRequirements.title")}
            </h3>
            <p className="text-gray-300 pl-6">
              {t("help.photoRequirements.content")}
            </p>
          </div>
          
          <div className="faq-item">
            <h3 className="font-montserrat font-semibold text-lg mb-2 flex items-center">
              <svg className="text-[#8E2DE2] mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9.00001C9.3251 8.33167 9.78915 7.76811 10.4 7.40914C11.0108 7.05016 11.7289 6.91892 12.4272 7.03871C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t("help.additionalSettings.title")}
            </h3>
            <p className="text-gray-300 pl-6">
              {t("help.additionalSettings.content")}
            </p>
          </div>
          
          <div className="faq-item">
            <h3 className="font-montserrat font-semibold text-lg mb-2 flex items-center">
              <svg className="text-[#8E2DE2] mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9.00001C9.3251 8.33167 9.78915 7.76811 10.4 7.40914C11.0108 7.05016 11.7289 6.91892 12.4272 7.03871C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t("help.modelFormat.title")}
            </h3>
            <p className="text-gray-300 pl-6">
              {t("help.modelFormat.content")}
            </p>
          </div>
          
          <div className="mt-8 border-t border-gray-700 pt-6">
            <h3 className="font-montserrat font-semibold text-lg mb-4">{t("help.contact.title")}</h3>
            <p className="flex items-center mb-3">
              <Mail className="text-[#8E2DE2] mr-3" />
              <a href={`mailto:${t("help.contact.email")}`} className="text-white hover:text-[#8E2DE2] transition-colors">
                {t("help.contact.email")}
              </a>
            </p>
            <p className="flex items-center">
              <Instagram className="text-[#8E2DE2] mr-3" />
              <a href="#" className="text-white hover:text-[#8E2DE2] transition-colors">
                {t("help.contact.instagram")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
