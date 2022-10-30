import React, {useEffect, useState} from 'react';
import Heading from '../reusable/Heading';
import MovieSelect from '../components/MovieSelect';
import MovieDetails from '../components/MovieDetails';
import FavouriteMovies from '../components/FavouriteMovies';



function StudioGhibliContainer () {

    const [movies, setMovies] = useState([]);
    const[selectedMovie, setSelectedMovie] = useState('');


    async function fetchMovies () {
        const response = await fetch ("https://ghibliapi.herokuapp.com/films")
        const data = await response.json();
        setMovies(data);
    }


    useEffect(() => {
        fetchMovies()
    }, []);


    function findMovieById(id) {
        return movies.find(movie => movie.id === id);
    }


    const handleMovieSelected = id => {
        setSelectedMovie(id)
    }


    const handleFavouriteToggle = (id) => {
        const updatedMovies = movies.map((movie) => {
            return movie.id === id
            ? {...movie, isFavourite: !movie.isFavourite}
            : movie
        }) 
        setMovies(updatedMovies)
    }


    return (
        <>
            <Heading text="The Studio Ghibli Film Collection"/>
            <MovieSelect movies={movies} changeHandler={
                (id) => {
                    const movie = findMovieById(id);
                    setSelectedMovie(movie);
                }
            }/>
            <MovieDetails movie={selectedMovie} onFavouriteToggle={handleFavouriteToggle}/>
            <FavouriteMovies movies={movies} onMovieSelected={handleMovieSelected}/>
        </>
    )

}

export default StudioGhibliContainer;
