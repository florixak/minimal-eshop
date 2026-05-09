import toast from "react-hot-toast";
import Button from "../Button";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const StayUpdated = () => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !inputValue ||
      inputValue.trim() === "" ||
      !/\S+@\S+\.\S+/.test(inputValue)
    ) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed successfully!");
    formRef.current?.reset();
    setInputValue("");
  };

  return (
    <section className="bg-secondary-50 py-24 px-8 text-center font-playfair space-y-6">
      <h2 className="text-3xl font-bold text-primary">{t("home.stayUpdatedTitle")}</h2>
      <p className="text-secondary-200">
        {t("home.stayUpdatedDescription")}
      </p>
      <form
        className="flex flex-col sm:flex-row max-w-md mx-auto items-center gap-2"
        onSubmit={handleSubscribe}
        ref={formRef}
      >
        <Input
          type="email"
          placeholder={t("home.stayUpdatedPlaceholder")}
          className="border rounded-lg bg-white py-5"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button className="bg-primary text-white rounded-lg">{t("home.stayUpdatedButton")}</Button>
      </form>
    </section>
  );
};

export default StayUpdated;
