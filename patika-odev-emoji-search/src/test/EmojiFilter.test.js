import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("Emoji sayfasının başarılı bir şekilde filitrelenmesi", () => {
  render(<App />);
  const inputText = screen.getByText("100");
  expect(inputText).toBeInTheDocument("100");
});