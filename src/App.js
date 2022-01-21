import React from 'react';
import Home from './Components/Home';
import MovieList from './Components/MovieList';
import MovieTrailer from './Components/MovieTrailer';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link } from "react-router-dom";
import './App.css'



function App() {
  return (
    <div className="App">
         <div>
           <BrowserRouter>
             <Link>
             <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/MovieList" element={<MovieList/>} />
                <Route path="/MovieTrailer" element={<MovieTrailer/>}/>
              </Routes>
             </Link>
           </BrowserRouter>
        </div>
    </div>

  );
};

export default App;
