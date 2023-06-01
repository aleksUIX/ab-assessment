import locale from "../const/locale";

export default function currencyFormatter(numStr: number, decimal: number) {
  if (numStr.toString() === "") return "";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD", // again, this could come from a user setting or a service
    maximumFractionDigits: 2,
    currencyDisplay: "narrowSymbol",
  }).format(numStr / Math.pow(10, decimal));
}
