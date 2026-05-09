import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

type CheckoutHeaderProps = {
  currentStep: number;
  totalSteps: number;
};

const CheckoutHeader = ({ currentStep, totalSteps }: CheckoutHeaderProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-36 py-8 pt-24 bg-secondary-50 font-playfair">
      <div className="flex items-center">
        <Link to="/cart" className="mr-2 text-primary">
          <ArrowLeft />
        </Link>
        <h2 className="text-2xl text-primary">{t("cart.checkout")}</h2>
      </div>
      <p>{t("checkout.step", { step: currentStep, total: totalSteps })}</p>
    </div>
  );
};

export default CheckoutHeader;
