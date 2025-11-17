import { useBooks } from "../../context/BookContext";
import "./BookFilter.css";

const BookFilter = () => {
    const { searchQuery, setSearchQuery, filterStatus, setFilterStatus } = useBooks();

    return (
        <div className="bookfilter-container">
            {/* Pencarian */}
            <input
                type="text"
                placeholder="Cari berdasarkan judul..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bookfilter-input"
            />

            {/* Filter status */}
            <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bookfilter-select"
            >
                <option value="all">Semua</option>
                <option value="milik">Dimiliki</option>
                <option value="baca">Sedang Dibaca</option>
                <option value="beli">Ingin Dibeli</option>
            </select>
        </div>
    );
};

export default BookFilter;
