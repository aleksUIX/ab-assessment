import PaymentInput from "../components/PaymentInfo/PaymentInput";
import { render, screen, fireEvent  } from '@testing-library/react';


test("renders PaymentInput component", async () => {
  expect(PaymentInput).toBeDefined();

  render(<PaymentInput title="payment-input"/>);
  const input = screen.getByTitle("payment-input");
  expect(input).toBeDefined();
});

test("PaymentInput passes custom props", async () => {
  expect(PaymentInput).toBeDefined();

  render(<PaymentInput title="payment-input" isRequired/>);
  const input = screen.getByTitle("payment-input");

  const inputRequired = input.attributes.getNamedItem("required");
  expect(inputRequired).toBeTruthy();
});

test("PaymentInput accepts inputs", async () => {
  expect(PaymentInput).toBeDefined();

  render(<PaymentInput title="payment-input" isRequired/>);
  const input = screen.getByTitle("payment-input") as any;

  // Simulate user input
  input.focus();

  fireEvent.change(input, { target: { value: 'some text' } });
  expect(input.value).toBe('some text');
})