import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from '../App';

 test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edilmesi", () => {
    render(<App />);
    const items = screen.getAllByText(/Click to copy emoji/i);
    const item = screen.getByText("Relaxed");
    expect(item).toBeInTheDocument();
    expect(items.length).toEqual(20);
  });