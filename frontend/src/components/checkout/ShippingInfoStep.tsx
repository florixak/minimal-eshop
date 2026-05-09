import { Card, CardContent, CardHeader } from "../ui/card";
import { type UseFormReturn } from "react-hook-form";
import { type CheckoutFormData } from "@/lib/schema";
import { Input } from "../ui/input";
import { ArrowLeft, Truck } from "lucide-react";
import { SHIPPING_METHODS } from "@/constants";
import { formatPrice } from "@/lib/utils";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import FormField from "../FormField";
import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";

type ShippingInfoStepProps = {
  form: UseFormReturn<CheckoutFormData>;
  onSubmit: () => void;
};

const ShippingInfoStep = ({ form, onSubmit }: ShippingInfoStepProps) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Card>
      <CardHeader>
        <h2 className="flex items-center text-xl font-bold text-primary font-playfair">
          <Truck className="inline-block mr-2" size={24} />
          {t("checkout.shippingInfo")}
        </h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label={t("checkout.fullName")}
              id="firstName"
              register={register}
              error={errors.firstName?.message}
              isSubmitting={isSubmitting}
            />
            <FormField
              label={t("auth.lastName")}
              id="lastName"
              register={register}
              error={errors.lastName?.message}
              isSubmitting={isSubmitting}
            />
            <FormField
              label={t("auth.email")}
              id="email"
              register={register}
              error={errors.email?.message}
              isSubmitting={isSubmitting}
            />
            <FormField
              label={t("auth.phone")}
              id="phone"
              register={register}
              error={errors.phone?.message}
              isSubmitting={isSubmitting}
            />
          </div>
          <FormField
            label={t("checkout.address")}
            id="address"
            register={register}
            error={errors.address?.message}
            isSubmitting={isSubmitting}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label={t("checkout.city")}
              id="city"
              register={register}
              error={errors.city?.message}
              isSubmitting={isSubmitting}
            />
            <FormField
              label={t("checkout.state")}
              id="state"
              register={register}
              error={errors.state?.message}
              isSubmitting={isSubmitting}
            />
            <FormField
              label={t("checkout.zipCode")}
              id="postalCode"
              register={register}
              error={errors.postalCode?.message}
              isSubmitting={isSubmitting}
            />
            <FormField
              label={t("checkout.country")}
              id="country"
              register={register}
              error={errors.country?.message}
              isSubmitting={isSubmitting}
            />
          </div>
          <h3 className="text-lg font-semibold font-playfair mt-4 text-primary">
            {t("checkout.shippingInfo")}
          </h3>
          {Array.from(Object.entries(SHIPPING_METHODS)).map(([key]) => (
            <div
              key={key}
              className="flex items-center border border-secondary-100 p-2 rounded-lg"
            >
              <Input
                type="radio"
                id={key}
                value={key}
                {...register("shippingMethod")}
                className="mr-2 size-4"
                disabled={isSubmitting}
                defaultChecked={key === "STANDARD"}
              />
              <Label
                htmlFor={key}
                className="text-sm flex justify-between w-full"
              >
                <span>
                  {t(`shop.shippingMethods.${key}.label`)} ({t(`shop.shippingMethods.${key}.description`)})
                </span>
                <span className="font-semibold">
                  {formatPrice(SHIPPING_METHODS[key].cost)}
                </span>
              </Label>
            </div>
          ))}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="link"
              className="text-sm text-secondary-200"
              asChild
            >
              <Link to="/cart" className="text-sm text-secondary-200">
                <ArrowLeft /> {t("common.back")}
              </Link>
            </Button>

            <Button type="button" onClick={onSubmit}>
              {t("common.next")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ShippingInfoStep;
