import CategoryProducts from "@/components/home/CategoryProducts";
import Hero from "@/components/home/Hero";
import StayUpdated from "@/components/home/StayUpdated";
import type { PRODUCT_FILTERS } from "@/constants";
import type { View } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import LandingImage from "../assets/hero-image.webp";
import { useTranslation } from "react-i18next";

type IndexSearch = {
  category: string;
  sortBy: (typeof PRODUCT_FILTERS)[number]["value"];
  view: View;
};

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: (search): IndexSearch => ({
    category: (search.category as string) ?? "all",
    sortBy:
      (search.sortBy as (typeof PRODUCT_FILTERS)[number]["value"]) ??
      "no-filter",
    view: (search.view as View) ?? "grid",
  }),
});

function Index() {
  const { t } = useTranslation();
  const navigate = Route.useNavigate();
  return (
    <>
      <Hero
        title={t("home.heroTitle")}
        subtitle={t("home.heroSubtitle")}
        description={t("home.heroDescription")}
        primaryButton={{
          text: t("home.shopCollection"),
          onClick: () =>
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
            }),
        }}
        secondaryButton={{
          text: t("home.learnMore"),
          onClick: () => navigate({ to: "/about" }),
        }}
        image={LandingImage}
      />

      <CategoryProducts title={t("home.shopByCategory")} />
      <StayUpdated />
    </>
  );
}
