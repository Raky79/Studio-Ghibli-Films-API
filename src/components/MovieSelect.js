import React from "react";



function MovieSelect ({movies, changeHandler}) {
    function onChange(evt) {
        const id = evt.target.value;
        changeHandler(id);
    }


    const options = movies.map(movie => (
        <option value={movie.id} key={movie.id}>
            {movie.title}
        </option>
    ));


    return (
        <label>
            <span className="film">Select Film:</span>
            <select className="select" onChange={onChange}>
                {options}
            </select>
        </label>
    )
}



export default MovieSelect;
