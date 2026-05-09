import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Separator } from "../ui/separator";
import toast from "react-hot-toast";
import { resetPassword } from "@/lib/api";
import AuthCard from "./AuthCard";
import { resetPasswordSchema, type ResetPasswordFormData } from "@/lib/schema";
import { useTranslation } from "react-i18next";

type ResetPasswordFormProps = {
  token: string;
};

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    try {
      const response = await resetPassword(token, data.newPassword);
      if (!response.success) {
        throw new Error(response.message || "Failed to reset password");
      }
      setSuccess(true);
      reset();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to reset password"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="space-y-4 font-inter text-center">
        <div className="flex justify-center">
          <CheckCircle className="size-16 text-green-500" />
        </div>
        <div className="text-lg font-semibold text-primary">
          {t("auth.resetPassword")}
        </div>
        <p className="text-secondary-400">
          You can now log in with your new password.
        </p>
        <Button asChild className="w-full">
          <Link to="/auth" search={{ mode: "login" }}>
            {t("auth.signIn")}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <AuthCard
      title={t("auth.resetPassword")}
      description="Enter your new password below."
      className="mt-4"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-inter">
        <div className="mb-4">
          <Link
            to="/auth"
            search={{ mode: "login" }}
            className="inline-flex items-center gap-2 text-sm text-secondary-200 hover:underline"
          >
            <ArrowLeft className="size-4" />
            {t("common.back")}
          </Link>
        </div>

        <div>
          <Label className="text-sm font-semibold text-primary">
            {t("auth.password")}
          </Label>
          <Input
            {...register("newPassword")}
            type="password"
            className="mt-1"
            placeholder="Enter new password"
          />
          {errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div>
          <Label className="text-sm font-semibold text-primary">
            {t("auth.confirmPassword")}
          </Label>
          <Input
            {...register("confirmNewPassword")}
            type="password"
            className="mt-1"
            placeholder="Confirm new password"
          />
          {errors.confirmNewPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmNewPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? `${t("auth.resetPassword")}...` : t("auth.resetPassword")}
        </Button>

        <Separator orientation="horizontal" className="bg-secondary-100" />
      </form>
    </AuthCard>
  );
};

export default ResetPasswordForm;
