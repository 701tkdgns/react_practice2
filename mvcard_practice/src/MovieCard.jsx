import React from 'react'

const MovieCard = ({movie}) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard


// <div className='movie'>
//     <div>
//         <p>2022</p>
//     </div>
//     <div>
//         <img src="https://images.velog.io/images/sungjin5891/post/c963194c-b329-4e70-a0fc-ea608934a7b8/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
//     </div>
//     <div>
//         <span>hello</span>
//         <h3>nice to meet you</h3>
//     </div>
// </div> 
