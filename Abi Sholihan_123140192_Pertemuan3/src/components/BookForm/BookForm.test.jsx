import { render, screen, fireEvent } from "@testing-library/react";
import { BookProvider } from "../../context/BookContext";
import BookForm from "./BookForm";

test("menambahkan buku baru melalui form", () => {
    render(
        <BookProvider>
            <BookForm />
        </BookProvider>
    );

    const titleInput = screen.getByPlaceholderText(/judul buku/i);
    const authorInput = screen.getByPlaceholderText(/penulis/i);
    const submitButton = screen.getByRole("button", { name: /tambah/i });

    fireEvent.change(titleInput, { target: { value: "Pemrograman React" } });
    fireEvent.change(authorInput, { target: { value: "Demi AM" } });
    fireEvent.click(submitButton);

    expect(titleInput.value).toBe("");
    expect(authorInput.value).toBe("");
});
