import { useState } from "react";
import { useBooks } from "../../context/BookContext";
import BookForm from "../BookForm/BookForm";
import "./BookList.css";

const BookList = () => {
    const { filteredBooks, deleteBook } = useBooks();
    const [editingBook, setEditingBook] = useState(null);

    // mengatasi jika pengguna mengedit data
    const handleEdit = (book) => {
        setEditingBook(book);
    };

    // Mengatasi jika pengguna membatalkan edit
    const handleCancelEdit = () => {
        setEditingBook(null);
    };

    // Menampilkan halaman web
    return (
        <div className="booklist-container">
            {editingBook && (
                <BookForm
                    editingBook={editingBook}
                    onCancelEdit={handleCancelEdit}
                />
            )}

            {filteredBooks.length === 0 ? (
                <p className="booklist-empty">Tidak ada buku ditemukan.</p>
            ) : (
                <ul className="booklist-list">
                    {filteredBooks.map((book) => (
                        <li key={book.id} className="booklist-item">
                            <div>
                                <strong>{book.title}</strong> <br />
                                <span>Penulis: {book.author}</span> <br />
                                <span>Status: {book.status}</span>
                            </div>

                            <div className="booklist-actions">
                                <button
                                    className="edit-btn"
                                    onClick={() => handleEdit(book)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteBook(book.id)}
                                >
                                    Hapus
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
