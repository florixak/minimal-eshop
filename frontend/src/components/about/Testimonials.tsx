import { TESTIMONIALS } from "@/constants";
import Section from "../Section";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <Section
      title={t("about.testimonialsTitle")}
      description={t("about.testimonialsDescription")}
    >
      <div className="grid md:grid-cols-3 gap-8 text-left">
        {TESTIMONIALS.map((testimonial, index) => (
          <Card key={index} className="border-secondary-100">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="text-primary italic">
                "{t(`about.testimonials.${index}.content`)}"
              </blockquote>
              <div>
                <cite className="text-primary font-semibold not-italic">
                  {testimonial.name}
                </cite>
                <p className="text-secondary-200 text-sm">
                  {t(`about.testimonials.${index}.role`)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
