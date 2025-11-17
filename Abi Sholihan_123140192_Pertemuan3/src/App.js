import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import "./App.css";

function App() {
    return (
        <BookProvider>
            <Router>
                {/* nav dibawah ini digunakan untuk memilih antara halaman home dan stat yang akan dimuat */}
                <nav className="navbar">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/stats">Stats</Link>
                </nav>

                <Routes>
                    {/* Mengatur rute web */}
                    <Route path="/" element={<Home />} />
                    <Route path="/stats" element={<Stats />} />
                </Routes>
            </Router>
        </BookProvider>
    );
}

export default App;
