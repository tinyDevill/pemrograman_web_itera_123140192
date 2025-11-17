import { useMemo } from "react";
import { useBooks } from "../context/BookContext";

function useBookStats() {
    const { books } = useBooks();

    const stats = useMemo(() => {
        // Total buku
        const total = books.length;
        // Total buku yang dimiliki
        const owned = books.filter(b => b.status === "milik").length;
        // Total buku yang sedang dibaca
        const reading = books.filter(b => b.status === "baca").length;
        // Total buku yang telah dibeli
        const wishlist = books.filter(b => b.status === "beli").length;

        // Mengembalikan variabel-variabel tersebut
        return {
            total,
            owned,
            reading,
            wishlist
        };
    }, [books]);

    return stats;
}

export default useBookStats;
