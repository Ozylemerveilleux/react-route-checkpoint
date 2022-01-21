import React from 'react' ;
import { useParams } from 'react-router-dom';


let movies = require ("./Data");
const MovieTrailer = () => {

    const { id } = useParams();
    let object = Object.keys(movies)
    let idtrailer = object[id]
    const MovieTrailer = movies[idtrailer]

    return (
        <div className='MovieT'>
            <video src={MovieTrailer.srcMovie} type="video/mp4" width="320" height="240" controls></video>
            <div>
                <h3>{MovieTrailer.title} </h3>
                <h5><a href={MovieTrailer.movieURL} >Lien</a></h5>    
            </div>    
        </div>
    )
}
export default MovieTrailer;