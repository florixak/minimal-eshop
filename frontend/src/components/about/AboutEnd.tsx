import { Route } from "@/routes/about";
import Section from "../Section";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const AboutEnd = () => {
  const { t } = useTranslation();
  const navigate = Route.useNavigate();
  const handleShopCollectionClick = () => {
    navigate({
      to: "/shop",
      search: {
        category: "all",
        sortBy: "no-filter",
        view: "grid",
        query: "",
        price: "0-1000",
        stock: "in-stock",
        page: 1,
      },
    });
  };

  const handleSecondaryButtonClick = () => {
    navigate({
      to: "/contact",
    });
  };

  return (
    <Section
      title={t("about.aboutEndTitle")}
      description={t("about.aboutEndDescription")}
    >
      <div className="flex flex-col md:flex-row md:space-x-4">
        <Button
          variant="default"
          className="py-4 px-6"
          onClick={handleShopCollectionClick}
        >
          {t("about.shopCollection")}
        </Button>
        <Button
          variant="outline"
          className="py-4 px-6"
          onClick={handleSecondaryButtonClick}
        >
          {t("about.designConsultation")}
        </Button>
      </div>
    </Section>
  );
};

export default AboutEnd;
