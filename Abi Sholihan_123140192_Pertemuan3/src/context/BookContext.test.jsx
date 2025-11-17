import { renderHook, act } from "@testing-library/react";
import { BookProvider, useBooks } from "./BookContext";

test("addBook menambah 1 item ke books", () => {
    const wrapper = ({ children }) => <BookProvider>{children}</BookProvider>;

    const { result } = renderHook(() => useBooks(), { wrapper });

    act(() => {
        result.current.addBook({
            title: "Test Book",
            author: "Tester",
            status: "milik"
        });
    });

    expect(result.current.books.length).toBe(1);
});
