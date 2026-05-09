import { useTranslation } from "react-i18next";
import { FAQ_ITEMS } from "@/constants";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-5 text-left font-inter p-2">
      {FAQ_ITEMS.map((_item, index) => (
        <div key={index}>
          <h4 className="text-md font-semibold text-primary mb-2">
            {t(`contact.faqItems.${index}.question`)}
          </h4>
          <p className="text-gray-600 mb-4 text-sm">
            {t(`contact.faqItems.${index}.answer`)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
