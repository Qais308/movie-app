# CineHub – Movie & TV Show Explorer

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=appveyor)](movie-app-rea-ct.netlify.app)

CineHub is a modern, responsive web application that lets users explore, search, and compare movies and TV shows. It provides real-time data from TMDB and OMDb APIs and allows personalized watchlists and favorites. The app has a sleek, dark-themed design with an intuitive interface.  

> **Note:** Backend integration is planned for the future to support user authentication, watchlist persistence, and more.

---

## Features

- **Search Movies & TV Shows:** Find movies or TV shows with live suggestions.  
- **Compare Movies/Shows:** Compare two movies or TV shows side-by-side including budget, revenue, IMDb rating, genres, overview, and watch providers.  
- **Trending & Popular Content:** Browse trending and highly rated movies.  
- **Genre Filtering:** Explore content by genres.  
- **Watchlist & Favorites:** Save your favorite movies/shows for quick access (frontend storage for now).  
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop screens.  
- **Dark Theme:** Sleek black background across all pages.  
- **Footer Attribution:** Displays all API & asset attributions.  

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, Framer Motion  
- **APIs:**  
  - [TMDB API](https://www.themoviedb.org/documentation/api) – Movie/TV show data  
  - [OMDb API](https://www.omdbapi.com/) – IMDb ratings  
- **State Management:** React Context API  
- **Routing:** React Router DOM  
- **Styling:** Tailwind CSS + custom components  
- **Animations:** Framer Motion  
- **Package Management:** npm / yarn  

> Backend (Node.js/Express/MongoDB) planned for future integration to handle user authentication, watchlist persistence, and data management.

---

## Project Structure

cinehub/
├─ src/
│ ├─ components/ # Header, Sidebar, Footer, MovieLogo
│ ├─ pages/ # Home, Trending, Genre, Compare, Details, Watchlist, Favourites, Search
│ ├─ context/ # MovieContext
│ ├─ App.jsx
│ └─ index.jsx
├─ public/
├─ package.json
└─ tailwind.config.js

---
## Author

**Md Qais** – [GitHub Profile](https://github.com/Qais308)