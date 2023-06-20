import locale from "../const/locale";

export default function dateFormatter(timestamp: number) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(timestamp);
}
