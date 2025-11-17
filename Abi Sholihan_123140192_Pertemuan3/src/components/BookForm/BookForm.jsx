import { useState, useEffect } from "react";
import { useBooks } from "../../context/BookContext";
import "./BookForm.css";

const BookForm = ({ editingBook, onCancelEdit }) => {
    // Variabel untuk mengambil komponen yang diperlukan
    const { addBook, editBook } = useBooks();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("milik");

    // Menyimpan data yang diedit
    useEffect(() => {
        if (editingBook) {
            setTitle(editingBook.title);
            setAuthor(editingBook.author);
            setStatus(editingBook.status);
        }
    }, [editingBook]);

    // Mengatasi error
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !author.trim()) {
            alert("Semua kotak harus diisi!");
            return;
        }

        const newBook = {
            title,
            author,
            status
        };

        if (editingBook) {
            editBook(editingBook.id, newBook);
            onCancelEdit();
        } else {
            addBook(newBook);
        }

        setTitle("");
        setAuthor("");
        setStatus("milik");
    };

    // Menampilkan halaman web
    return (
        <form className="bookform" onSubmit={handleSubmit}>
            <h2 className="bookform-title">
                {editingBook ? "Edit Buku" : "Tambah Buku Baru"}
            </h2>

            <input
                type="text"
                placeholder="Judul buku..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bookform-input"
            />

            <input
                type="text"
                placeholder="Nama penulis..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="bookform-input"
            />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bookform-select"
            >
                <option value="milik">Dimiliki</option>
                <option value="baca">Sedang Dibaca</option>
                <option value="beli">Ingin Dibeli</option>
            </select>

            <button type="submit" className="bookform-submit">
                {editingBook ? "Simpan Perubahan" : "Tambah Buku"}
            </button>

            {editingBook && (
                <button
                    type="button"
                    onClick={onCancelEdit}
                    className="bookform-cancel"
                >
                    Batal
                </button>
            )}
        </form>
    );
};

export default BookForm;
