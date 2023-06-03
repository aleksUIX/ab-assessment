import cardNumberFormatter from "./cardNumberFormatter";

test("cardNumberFormatter", () => {
  expect(cardNumberFormatter("")).toBe("");
  expect(cardNumberFormatter("1234")).toBe("1234 ");
  expect(cardNumberFormatter("12341234")).toBe("1234 1234 ");
  expect(cardNumberFormatter("1234123412341234123412341234123412341234")).toBe("1234 1234 1234 1234");
})