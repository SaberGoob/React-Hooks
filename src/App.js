import React, { useState } from 'react'

import MoviesData from './Components/MoviesData/MoviesData';
import MovieList from './Components/MovieList/MovieList'
import FilterByTitle from "./Components/Filter/Filter";
import AddMovie from './Components/AddMovie/AddMovie';
import NavBar from './Components/NavBar/NavBar'


import './App.css';

function App() {

  const [movies, setMovies] = useState(MoviesData);
  const [inputText, setInputText] = useState("");
  const [value] = useState(1);
  return (
    <div className="App">
      <div className='navigation'>
        <NavBar/>
        <div className="filterPart">
        <FilterByTitle inputText={inputText} setInputText={setInputText} />
        </div>
      </div>
      <div className='marj'>
      <AddMovie movies={movies} setMovies={setMovies} />
      </div>
      <div> 
      <MovieList movies={movies} inputText={inputText} value={value} />
    </div>
    </div>
  );
}

export default App;
