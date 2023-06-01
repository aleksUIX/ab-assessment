import currencyFormatter from "../utils/currencyFormatter";


// Unit tests for currencyFormatter
test('formats currency', async () => {
  expect(currencyFormatter(1000, 2)).toBe("$10.00");
  expect(currencyFormatter(50001, 2)).toBe("$500.01");
});