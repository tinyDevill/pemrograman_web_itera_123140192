import BookForm from "../../components/BookForm/BookForm";
import BookFilter from "../../components/BookFilter/BookFilter";
import BookList from "../../components/BookList/BookList";
import "./Home.css";

const Home = () => {
    // Menampilkan halaman Home dengan cara memanggil fungsi-fungsi yang sudah dibuat
    return (
        <div className="home-container">
            <h1 className="home-title">Manajemen Buku Pribadi</h1>

            <BookForm />

            <BookFilter />

            <BookList />
        </div>
    );
};

export default Home;
