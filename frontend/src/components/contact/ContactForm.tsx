import { CONTACT_CATEGORIES } from "@/constants";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <form className="flex flex-col space-y-4 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input type="text" placeholder={t("contact.name")} className="w-full" />
        <Input type="email" placeholder={t("contact.email")} className="w-full" />
      </div>
      <Select>
        <SelectTrigger className="w-full">
          <span>{t("contact.subject")}</span>
        </SelectTrigger>
        <SelectContent>
          {CONTACT_CATEGORIES.map((category, index) => (
            <SelectItem key={category.value} value={category.value}>
              {t(`contact.categories.${index}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input type="text" placeholder={t("contact.subject")} className="w-full" />
      <Textarea
        placeholder={t("contact.message")}
        rows={6}
        maxLength={500}
        className="w-full max-h-48"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
      >
        {t("contact.sendButton")}
      </button>
    </form>
  );
};

export default ContactForm;
