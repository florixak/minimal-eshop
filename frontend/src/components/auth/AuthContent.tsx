import { Route } from "@/routes/auth";
import LoginForm from "./LoginForm";
import AuthCard from "./AuthCard";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import VerifyEmail from "./VerifyEmail";
import { useTranslation } from "react-i18next";

const AuthContent = () => {
  const { t } = useTranslation();
  const search = Route.useSearch();

  const renderContent = () => {
    switch (search.mode) {
      case "login":
        return (
          <AuthCard title={t("auth.login")} description={t("auth.signIn")}>
            <LoginForm />
          </AuthCard>
        );
      case "register":
        return (
          <AuthCard title={t("auth.register")} description={t("auth.signUp")}>
            <RegisterForm />
          </AuthCard>
        );
      case "forgot-password":
        return (
          <AuthCard title={t("auth.forgotPassword")} description={t("auth.resetPassword")}>
            <ForgotPasswordForm />
          </AuthCard>
        );
      case "verify-email":
        return (
          <AuthCard title={t("auth.verifyEmail")} description={t("auth.enterOtp")}>
            <VerifyEmail />
          </AuthCard>
        );
      default:
        return (
          <AuthCard title={t("auth.login")} description={t("auth.signIn")}>
            <LoginForm />
          </AuthCard>
        );
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 gap-5">
      <h1
        className={`${
          search.mode === "register" ? "mt-22" : ""
        } text-4xl font-bold text-primary font-playfair`}
      >
        {t("header.brand")}
      </h1>
      {renderContent()}
      <p className="text-center text-secondary-200 text-xs max-w-xs mx-auto">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </p>
    </section>
  );
};

export default AuthContent;
