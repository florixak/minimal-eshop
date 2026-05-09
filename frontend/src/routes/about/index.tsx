import Hero from "@/components/home/Hero";
import AboutImage from "@/assets/about-image.webp";
import { createFileRoute } from "@tanstack/react-router";
import Statistics from "@/components/about/Statistics";
import OurMission from "@/components/about/OurMission";
import OurValues from "@/components/about/OurValues";
import OurTeam from "@/components/about/OurTeam";
import Testimonials from "@/components/about/Testimonials";
import GetInTouch from "@/components/about/GetInTouch";
import AboutEnd from "@/components/about/AboutEnd";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  const { t } = useTranslation();
  const navigate = Route.useNavigate();
  const handleNavigateToShop = () => {
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
  const handleScrollToTeam = () => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Hero
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
        description={t("about.heroDescription")}
        primaryButton={{
          text: t("about.shopOurStory"),
          onClick: handleNavigateToShop,
        }}
        secondaryButton={{
          text: t("about.meetOurTeam"),
          onClick: handleScrollToTeam,
        }}
        image={AboutImage}
      />
      <Statistics />
      <OurMission />
      <OurValues />
      <OurTeam />
      <Testimonials />
      <GetInTouch />
      <AboutEnd />
    </>
  );
}
