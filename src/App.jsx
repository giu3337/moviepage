import { useState, useEffect } from 'react';
import './App.css';

const API_URL = "http://www.omdbapi.com/?apikey=86b8e854";

function App() {

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
    <>
     <h1>App</h1>
    </>
  );
}

export default App;
