import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies")
    .then(res => setMovies(res.data))
    .catch(err => console.log(err.response))
  }, []);


  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };


  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/"  render={props => <MovieList {...props} movies={movies}/> }/>
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} setMovies={setMovies} addToSavedList={addToSavedList} />;
        }}
        />
              <Route path='/update-movie/:id' 
        render={props => (
        <UpdateMovie  {...props} movies={movies} />  )}
          />
        
    </>
  );
};

export default App;
