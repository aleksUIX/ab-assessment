export default function cardNumberFormatter(value: string) {
  // replace everything except for numbers
  let newNumber = value.replace(/\D/g, "");

  // add spaces every 4 digits
  newNumber = newNumber.replace(/(\d{4})/g, "$1 ");

  // max 16 digits with spaces
  newNumber = newNumber.substring(0, 19);

  return newNumber;
}
