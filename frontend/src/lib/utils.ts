import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CURRENCY_CONFIG } from "@/config/currency";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

const USD_TO_CNY = CURRENCY_CONFIG.exchangeRates.USD_TO_CNY;

export const formatPrice = (price: number | string) => {
  const locale =
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLng") || "en"
      : "en";
  const isChinese = locale.startsWith("zh");
  const lang = isChinese ? "zh-CN" : "en-US";
  const currency = isChinese ? "CNY" : "USD";
  const numericPrice = Number(price);
  const convertedPrice = isChinese ? numericPrice * USD_TO_CNY : numericPrice;
  try {
    return new Intl.NumberFormat(lang, {
      style: "currency",
      currency,
    }).format(convertedPrice);
  } catch {
    return isChinese ? `¥${convertedPrice}` : `$${numericPrice}`;
  }
};

export const formatPriceSimple = (price: number) => {
  const locale =
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLng") || "en"
      : "en";
  const isChinese = locale.startsWith("zh");
  const symbol = isChinese ? "¥" : "$";
  const converted = isChinese ? price * USD_TO_CNY : price;
  if (converted >= 1000) {
    return `${symbol}${(converted / 1000).toFixed(converted % 1000 === 0 ? 0 : 1)}k`;
  }
  return `${symbol}${converted}`;
};

export const formatDate = (dateString: string) => {
  const locale =
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLng") || "en"
      : "en";
  const lang = locale.startsWith("zh") ? "zh-CN" : "en-US";
  const date = new Date(dateString);
  return date.toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const calculateTotal = (
  items: { price: number; quantity: number }[]
) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const formatOrderNumber = (orderId: number) => {
  return `#${orderId.toString().padStart(6, "0")}`;
};

export const firstLetterUppercase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
