import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Membuat context
const BookContext = createContext();

// Komponen yang akan digunakan
export const BookProvider = ({ children }) => {
    const [books, setBooks] = useLocalStorage("books", []);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    // Menambahkan buku baru
    const addBook = (book) => {
        setBooks([
            ...books,
            { id: Date.now(), ...book }
        ]);
    };

    // Edit buku
    const editBook = (id, updatedBook) => {
        setBooks(
            books.map((b) =>
                b.id === id ? { ...b, ...updatedBook } : b
            )
        );
    };

    // Menghapus buku
    const deleteBook = (id) => {
        setBooks(books.filter((b) => b.id !== id));
    };

    // Filter dan pencarian
    const filteredBooks = books.filter((b) => {
        const matchesStatus =
            filterStatus === "all" ? true : b.status === filterStatus;

        const matchesSearch = b.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        return matchesStatus && matchesSearch;
    });

    // Mengembalikan semua komponen yang telah dibuat
    return (
        <BookContext.Provider
            value={{
                books,
                filteredBooks,
                addBook,
                editBook,
                deleteBook,
                searchQuery,
                setSearchQuery,
                filterStatus,
                setFilterStatus
            }}
        >
            {children}
        </BookContext.Provider>
    );
};

// Hook supaya komponen dapat digunakan file lain
export const useBooks = () => useContext(BookContext);
export { BookContext };