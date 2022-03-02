import React, { useState } from "react"
import './App.css';
import AddMovie from "./Components/AddMovie/AddMovie";
import Header from "./Components/Header/Header";
import MoviesList from "./Components/MoviesList";
import { moviesData } from "./moviesData";
import { Route, Routes } from 'react-router-dom';
import Navbarr from "./Components/navBar/Navbarr";
import Details from "./Components/Details";


function App() {
  const [movies, setMovies] = useState(moviesData)
  const [searchTitle, setSearchTitle] = useState("")
  const [searchRate, setSearchRate] = useState(0)

  const addNewMovie = (x) => {
    setMovies([...movies, x])
  }

  return (
    <div className="App">
      <Navbarr />
      <Header setSearchTitle={setSearchTitle} setSearchRate={setSearchRate} searchRate={searchRate} />
      <Routes>
        <Route path="/" element={<div>

          <MoviesList movies={movies.filter(el => el.name.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase().trim()) && el.rating >= searchRate)} />
      <AddMovie addNewMovie={addNewMovie} />
          </div>} />
          <Route path="/home" element={<div>

          <MoviesList movies={movies.filter(el => el.name.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase().trim()) && el.rating >= searchRate)} />
      <AddMovie addNewMovie={addNewMovie} />
          </div>} />

      
         
      <Route path='/movie/:name' element={<Details movies={movies} />} />
       
       
      </Routes>
     
    </div>
  );
}

export default App;
