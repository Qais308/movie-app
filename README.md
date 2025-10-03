# MovieSync – Movie & TV Show Explorer

<h2 class="text-center">🚀 Live Demo</h2>
<p class="text-center">
  <a href="https://movie-sync.netlify.app">
    <img src="https://img.shields.io/badge/View%20App-Live-blue?style=for-the-badge&logo=react" alt="Live Demo"/>
  </a>
</p>

MovieSync is a modern, responsive web application that lets users explore, search, and compare movies and TV shows. It provides real-time data from TMDB and OMDb APIs and allows personalized watchlists and favorites. The app has a sleek, dark-themed design with an intuitive interface.

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

```
client/
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Sidebar.jsx
│  │  ├─ Footer.jsx
│  │  └─ MovieLogo.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Trending.jsx
│  │  ├─ Genre.jsx
│  │  ├─ Compare.jsx
│  │  ├─ Details.jsx
│  │  ├─ Watchlist.jsx
│  │  ├─ Favourites.jsx
│  │  └─ Search.jsx
│  ├─ context/
│  │  └─ MovieContext.jsx
│  ├─ App.jsx
│  └─ index.jsx
├─ public/
├─ package.json
└─ tailwind.config.js
```

---

## Author

**Md Qais** – [GitHub Profile](https://github.com/Qais308)
