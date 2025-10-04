import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
import Favourites from "./pages/favouritesPage";
import WatchlistPage from "./pages/WatchlistPage";
import PopularShows from "./pages/PopularShowsPage"
import Footer from "./components/Footer";
import PopularMovies from "./pages/PopularMoviesPage";
import GenrePage from "./pages/GenrePage";
import { MovieProvider } from "./context/MovieContext";
import Details from "./pages/DetailsPage";
import PersonDetails from "./pages/PersonDetails";
import useDisableZoom from "./components/DisableZoom";
import Compare from "./pages/Compare";
import SearchPage from "./pages/SearchPage";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/AboutPage";


function App() {
  useDisableZoom();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MovieProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-black text-white">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="flex-1 content pt-[64px] px-2 md:px-4 ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/genre/:genreId/:genreName"
                element={<GenrePage />}
              />
              <Route path="/movies" element={<PopularMovies />} />
              <Route path="/shows" element={<PopularShows />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/watchlist" element={<WatchlistPage />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/person/:id" element={<PersonDetails />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/about" element={<About />} />
      

              {/* 404 fallback */}
              <Route
                path="*"
                element={<h1 className="text-white">404 Not Found</h1>}
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
