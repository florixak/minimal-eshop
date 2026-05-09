import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === "zh" ? "en" : "zh";
    i18n.changeLanguage(next);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-primary hover:text-secondary-200"
      onClick={toggleLanguage}
      title={i18n.language === "zh" ? "Switch to English" : "切换至中文"}
    >
      <Languages className="size-5" />
      <span className="ml-1 text-xs font-semibold">
        {i18n.language === "zh" ? "EN" : "中"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
