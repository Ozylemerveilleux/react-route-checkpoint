import React from "react";
import {data} from './Data'
import MovieProps from "./MovieProps";



function MovieList (props) {
    return(
        <>
        <div>
            {data.map((movie) => 
            <MovieProps

            src = {movie.src}
            title = {movie.title}
            description = {movie.description}
            href = {movie.movieUrl}
            />
            )};
        </div>
        </>
    )
}
export default MovieList;