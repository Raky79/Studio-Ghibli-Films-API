import React from "react";


function MovieDetails ({movie, onFavouriteToggle}) {
    if(!movie) {
        return null;
    }


    const handleClick = () => {
        onFavouriteToggle(movie.id)
    }


    const favouriteBtnText = movie.isFavourite ? 'Remove from favourites' : 'Add to favourites'

 
    return (

        <section>

            <p><strong>Original Title:</strong>{movie.original_title}</p>
            <p><strong>Director:</strong>{movie.director}</p>
            <p><strong>Release Date:</strong>{movie.release_date}</p>
            <p><strong>Description:</strong>{movie.description}</p>
            <img src={movie.image} alt={`Frontcover of ${movie.title}`}></img>

            <button className="button" onClick={handleClick}>{favouriteBtnText}</button>

        </section>
       
    )
}


export default MovieDetails;