import expiryDateFormatter from '../utils/expiryDateFormatter';


test('expiryDateFormatter formatting', () => {
  expect(expiryDateFormatter("1221")).toBe("12/21");

  expect(expiryDateFormatter("0222")).toBe("02/22");

  expect(expiryDateFormatter("0328")).toBe("03/28");
})


test('expiryDateFormatter error handling', () => {
  expect(expiryDateFormatter("1321")).not.toBe("13/21");

  expect(expiryDateFormatter("2222")).not.toBe("22/22");

  expect(expiryDateFormatter("999999")).not.toBe("99/99");
})