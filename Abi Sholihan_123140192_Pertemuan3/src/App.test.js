import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("menampilkan halaman Home sebagai default", () => {
    render(
        <App />
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
});
