import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const FOOTER_SECTIONS = [
    {
      title: t("header.brand"),
      description: t("footer.brandDescription"),
      links: [],
    },
    {
      title: t("footer.shop"),
      links: [
        t("footer.shopLinks.allProducts"),
        t("footer.shopLinks.newArrivals"),
        t("footer.shopLinks.bestSellers"),
        t("footer.shopLinks.sale"),
      ],
    },
    {
      title: t("footer.aboutUs"),
      links: [
        t("footer.aboutLinks.ourStory"),
        t("footer.aboutLinks.mission"),
        t("footer.aboutLinks.values"),
      ],
    },
    {
      title: t("footer.customerService"),
      links: [
        t("footer.serviceLinks.contactUs"),
        t("footer.serviceLinks.returns"),
        t("footer.serviceLinks.shippingInfo"),
      ],
    },
  ];

  return (
    <div className="pt-24 pb-12 text-center font-playfair px-8 md:px-16 lg:px-36 space-y-12">
      <Separator orientation="horizontal" className="bg-secondary-100" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {FOOTER_SECTIONS.map((section, index) => (
          <div key={index} className="text-start space-y-4">
            <h2 className="text-xl text-primary">{section.title}</h2>
            {section.description && (
              <p className="text-secondary-200 text-sm">
                {section.description}
              </p>
            )}
            <ul className="text-sm text-secondary-200 space-y-4">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="space-y-2 flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-start">
        <p className="text-sm text-secondary-200">
          &copy; {new Date().getFullYear()} {t("header.brand")}.{" "}
          {t("footer.copyright")}
        </p>
        <div className="flex justify-center flex-col items-center sm:items-start">
          <p className="text-sm text-secondary-200">{t("footer.followUs")}</p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="#" className="text-secondary-200 hover:text-primary">
              Facebook
            </a>
            <a href="#" className="text-secondary-200 hover:text-primary">
              Instagram
            </a>
            <a href="#" className="text-secondary-200 hover:text-primary">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
