import { useState, useEffect } from 'react';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
import './App.css';

const API_URL = "http://www.omdbapi.com/?apikey=86b8e854";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // Function to fetch movies
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Initial search on page load
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder='Search for a movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie1={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
