// import './App.css';
// import React, {useEffect, useState} from 'react';
// import SearchIcon from './search.svg';
// import MovieCard from './MovieCard';
// import './App.css';



// // const API_KEY = process.env.API_KEY;

// const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;


// const App = () => {

//     const [movies, setMovies] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');


//     const searchMovies = async (title) => {
//         const response = await fetch(`${API_URL}&s=${title}`);
//         const data = await response.json();

//         setMovies(data.Search);
//     }

//     useEffect(() => {
//         searchMovies('Spiderman');
//     }, []);

//     return (
//         <div className='app'>
//             <h1>MoviLand</h1>

//             <div className='search'>
//                 <input 
//                     placeholder='Search for movies'
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <img
//                     src={SearchIcon}
//                     alt="search"
//                     onClick={() => searchMovies(searchTerm)}
//                 />

//                 {
//                     movies?.length > 0
//                     ?    (
//                             <div className='container'>
//                                 {movies.map((movie) => {
//                                     <MovieCard movie={movie}/>
//                                 })}
//                             </div>
//                         ) : 
//                         (
//                             <div className='empty'>
//                                 <h2>No Movies found</h2>
//                             </div>
//                         )
//                 }
                
//             </div>
//         </div>
//     );
// }

// export default App;


import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// const apikey = process.env.API_KEY;
// const API_URL = `http://www.omdbapi.com?apikey=${apikey}`;
const API_URL = `http://www.omdbapi.com?apikey=${apikey}`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect : 초기 실행 함수 > 프로그램이 실행될 때 안에 있는 내용들이 우선적으로 실행
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); // API 내용 가져오기
    const data = await response.json(); // JSON > KEY, VALUE 모두 STRING

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 설정
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} // 돋보기 클릭시 함수
        />
      </div>

      {movies?.length > 0 ? ( // movie 객체가 있고, 길이가 0보다 큰가?
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
