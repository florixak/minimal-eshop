import { VALUES } from "@/constants";
import { Card, CardContent } from "../ui/card";
import Section from "../Section";
import { useTranslation } from "react-i18next";

const OurValues = () => {
  const { t } = useTranslation();
  return (
    <Section
      title={t("about.ourValues")}
      description={t("about.valuesDescription")}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {VALUES.map((value, index) => (
          <Card
            key={index}
            className="border-secondary-100 hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex justify-center">
                {<value.icon className="size-8 text-primary" />}
              </div>
              <h3 className="text-xl font-semibold text-amber-900">
                {t(`about.values.${index}.title`)}
              </h3>
              <p className="text-amber-700 leading-relaxed">
                {t(`about.values.${index}.description`)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default OurValues;
