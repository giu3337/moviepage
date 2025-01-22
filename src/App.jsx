import { useState, useEffect } from 'react';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
import './App.css';

const API_URL = "http://www.omdbapi.com/?apikey=86b8e854";

const movie1 = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
          alt="searchIcon" 
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className='container'>
        <div className='movies'>
          <MovieCard movie1={movie1} />
        </div>
      </div>
    </div>
  );
}

export default App;
