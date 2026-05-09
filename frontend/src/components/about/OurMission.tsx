import { Quote } from "lucide-react";
import Section from "../Section";
import { useTranslation } from "react-i18next";

const OurMission = () => {
  const { t } = useTranslation();
  return (
    <Section
      title={t("about.ourMission")}
      description={t("about.missionDescription")}
      bgClassName="bg-secondary-50"
    >
      <div className="bg-white rounded-xl p-6 flex items-center justify-center flex-col max-w-2xl mx-auto shadow-md">
        <Quote className="size-8 text-secondary-200" />
        <blockquote className="mt-2 text-primary italic">
          {t("about.missionQuote")}
        </blockquote>
        <cite className="mt-4 block text-secondary-200 font-semibold">
          {t("about.missionAuthor")}
        </cite>
      </div>
    </Section>
  );
};

export default OurMission;
