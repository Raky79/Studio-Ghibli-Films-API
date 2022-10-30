import React from 'react';



const FavouriteMovies = ({movies, onMovieSelected}) => {
    
    const favouriteMovies = movies.filter(movie => movie.isFavourite)

    return (
        <>
            <h3 className='favourite'>Favourite Films:</h3>
            <ul>
                {favouriteMovies.map(movie => {
                    return (
                        <li key={movie.id}>
                          <button className='button' onClick={() => onMovieSelected(movie.id)}>{movie.title}</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )


}

export default FavouriteMovies;