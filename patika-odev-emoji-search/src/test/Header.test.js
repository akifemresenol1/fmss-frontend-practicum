import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../Header";

test("Header render", () => {
    render(<Header/>);

    const headerDom = screen.getByText(/Emoji Search/i);
    expect(headerDom).toBeInTheDocument();
})