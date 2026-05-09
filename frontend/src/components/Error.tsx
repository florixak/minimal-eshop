import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";

type ErrorProps = {
  title?: string;
  message?: string;
  actionLabel?: string;
  actionHref?: string;
};

const Error = ({
  title,
  message,
  actionLabel,
  actionHref = "/",
}: ErrorProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-white">
      <AlertTriangle className="h-16 w-16 text-yellow-500 mb-6" />
      <h1 className="text-3xl font-bold text-primary mb-2">
        {title || t("common.error")}
      </h1>
      <p className="text-secondary-400 mb-6 text-center max-w-md">
        {message || t("common.errorMessage")}
      </p>
      <Button asChild>
        <Link to={actionHref}>{actionLabel || t("common.goHome")}</Link>
      </Button>
    </div>
  );
};

export default Error;
