import { render, screen } from "@testing-library/react";
import { BookProvider } from "../../context/BookContext";
import BookList from "./BookList";

test("tampilkan pesan jika tidak ada buku", () => {
    render(
        <BookProvider>
            <BookList />
        </BookProvider>
    );

    expect(screen.getByText(/tidak ada buku/i)).toBeInTheDocument();
});
