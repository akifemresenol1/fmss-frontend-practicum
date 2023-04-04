import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("Emoji Copy render", () => {
    render(<App/>);
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute('data-clipboard-text');
});