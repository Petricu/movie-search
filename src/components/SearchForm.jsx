import React, { useState } from "react";
import '../App.css';

export default function SearchForm(props) {
  const [movie, setMovie] = useState("");
       return (
           <div>
               <input name="" type="text" value={movie} onChange={(event) => {
                 setMovie(event.target.value);
               }}/>
               <button onClick={() => props.callback(movie.replace(' ', '-'))}>Search</button>
           </div>
       );
}

