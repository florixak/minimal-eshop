import { AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <AlertTriangle className="h-16 w-16 text-yellow-500 mb-6" />
      <h1 className="text-4xl font-bold text-primary mb-2">
        {t("common.notFound")}
      </h1>
      <p className="text-secondary-400 mb-6 text-center max-w-md">
        {t("common.notFoundMessage")}
      </p>
      <Button asChild>
        <Link
          to="/shop"
          search={{
            category: "all",
            sortBy: "no-filter",
            view: "grid",
            query: "",
            price: "0-1000",
            stock: "in-stock",
            page: 1,
          }}
        >
          {t("common.goToShop")}
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
