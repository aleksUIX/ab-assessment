export default function currencyFormatter(numStr: number) {
  if (numStr.toString() === "") return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(numStr);
}
