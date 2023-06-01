export default function currencyFormatter(numStr: number, decimal: number) {
  if (numStr.toString() === "") return "";

  // locale could come from a user setting or a service
  // but right now we can take the locale from the browser
  const locale = navigator.language || 'en-US';

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD", // again, this could come from a user setting or a service
    maximumFractionDigits: 2,
  }).format(numStr / Math.pow(10, decimal));
}
