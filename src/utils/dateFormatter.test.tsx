import dateFormatter from "../utils/dateFormatter";

// Unit tests for dateFormatter
test('formats date', async () => {
  expect(dateFormatter(1685660125000)).toBe("Thursday, June 1, 2023");
  expect(dateFormatter(1645660125000)).toBe("Wednesday, February 23, 2022");
})