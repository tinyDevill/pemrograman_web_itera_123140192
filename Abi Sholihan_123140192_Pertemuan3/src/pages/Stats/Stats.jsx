import "./Stats.css";
import useBookStats from "../../hooks/useBookStats";

const Stats = () => {
    // Mengambil variabel-variabel yang ada di file useBookStats
    const { total, owned, reading, wishlist } = useBookStats();

    // Menampilkan stats jumlah buku yang dimiliki oleh pengguna
    return (
        <div className="stats-container">
            <h1 className="stats-title">Statistik Buku</h1>

            <div className="stats-grid">

                <div className="stats-card">
                    <h3>Total Buku</h3>
                    <p>{total}</p>
                </div>

                <div className="stats-card">
                    <h3>Dimiliki</h3>
                    <p>{owned}</p>
                </div>

                <div className="stats-card">
                    <h3>Sedang Dibaca</h3>
                    <p>{reading}</p>
                </div>

                <div className="stats-card">
                    <h3>Ingin Dibeli</h3>
                    <p>{wishlist}</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;
