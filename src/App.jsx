import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
import Favourites from "./pages/favouritesPage";
import WatchlistPage from "./pages/WatchlistPage";
import TrendingIndianPage from "./pages/TrendingIndianPage";
import Footer from "./components/Footer";
import TrendingPage from "./pages/TrendingPage";
import { useState } from "react";
import GenrePage from "./pages/GenrePage";
import { MovieProvider } from "./context/MovieContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/DetailsPage";
import PersonDetails from "./pages/PersonDetails";
import useDisableZoom from "./components/DisableZoom";
import Compare from "./pages/Compare";
import SearchPage from "./pages/SearchPage";


function App() {
  useDisableZoom();
  const [isOpen, setIsOpen] = useState(false);

  return (
  
    <MovieProvider>
      <Router>
        <div className="bg-black">
         
<Header isOpen={isOpen} setIsOpen={setIsOpen} />
<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="content pt-[64px] px-4">
           
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/genre/:genreId/:genreName"
                element={<GenrePage />}
              />
              <Route path="/trending" element={<TrendingPage />} />
              <Route path="/indian" element={<TrendingIndianPage />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/watchlist" element={<WatchlistPage />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/person/:id" element={<PersonDetails />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/search" element={<SearchPage />} />


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
