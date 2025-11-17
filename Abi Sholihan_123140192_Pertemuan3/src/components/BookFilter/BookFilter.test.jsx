import { render, screen, fireEvent } from "@testing-library/react";
import BookFilter from "./BookFilter";
import { BookContext } from "../../context/BookContext";

test("filter berubah ketika user memilih status", () => {
    const mockSetFilterStatus = jest.fn();

    render(
        <BookContext.Provider value={{ filterStatus: "all", setFilterStatus: mockSetFilterStatus }}>
            <BookFilter />
        </BookContext.Provider>
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "baca" } });

    expect(mockSetFilterStatus).toHaveBeenCalledWith("baca");

    fireEvent.change(select, { target: { value: "baca" } });

    expect(mockSetFilterStatus).toHaveBeenCalledWith("baca");
});
