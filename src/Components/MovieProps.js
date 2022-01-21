import React from "react";
import StarRatings from './StarRatings';
import {Link} from 'react-router-dom'

const MoviesProps= ({movies})=> {
    return (
        <div>
            {movies.map((movie, index) => (
                
                <div key={index} className="Movie">
                    <Link to ={`/MovieProps/${movie.id}`}>
                    <img
                        src={movie.src}
                        alt={movie.title}
                    />
                        </Link>
                    <div>
                        <h4>{movie.title}</h4>
                        <h6>{movie.description}</h6>
                        <a href={movie.movieURL} className="Lien"> <h6> Lien </h6> </a>
                        <StarRatings />
                    </div>                   
                </div>
            ))}
        </div>
    );
}

export default MoviesProps;