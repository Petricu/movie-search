import React, {useState} from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Axios from 'axios';
import Movie from './components/Movie';

const movieSearchApi = "https://api.themoviedb.org/3/search/movie?api_key=a8de9373ab84e4f59c09d5565bb69b8a&query=";

export default function App() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovieListByName = (name) => {
    console.log(movieSearchApi + name.trim());
    Axios.get(movieSearchApi + name.replace())
    .then((res) => setMovies(res.data.results))
    .catch((err) => {
      console.error(err);
    });
    console.log(title);
  };
  
  const renderMovies = () => {
    return movies.map((movie, index) => {
      return (
        <Movie id={index} title={movie.title} avgVote={movie.vote_average} releaseDate={movie.release_date} overview={movie.overview}/>
      )
    })
  };
  return (
    <div className="App">
      <SearchForm callback={getMovieListByName}/>
      {renderMovies()}
    </div>
  )
}

