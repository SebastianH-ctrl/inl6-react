import React, { useEffect, useState } from 'react';
import deleteImg from './images/delete.png';
import starImg from './images/star.png';
import SortList from './SortList';

function MovieSearch() {
    const [movies, setMovies] = useState([]);
    const [sortedMovies, setSortedMovies] = useState(() => movies);


    useEffect(() => {
        setSortedMovies(movies);
    }, [movies]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim();
        const rating = e.target.rating.value;

        if (title !== '' && rating !== '0') {
            const newMovie = { title, rating };
            setMovies([...movies, newMovie]);
            e.target.reset();
        } else {
            alert('Please enter both a title and a rating.');
        }
    };

    const handleDelete = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };

    return (
        <>
        <div className="container">
            <h1>MIN FILMLISTA</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="flex flex-col">
                    <legend className="legend">Lägg till film</legend>
                    <label className="title">Titel</label>
                    <input type="text" className="title-input" name="title" placeholder="Skriv titel här" />
                    <label className="rating-field">Betyg:</label>
                    <select className="rating-input" name="rating">
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1/5</option>
                        <option value="2">2/5</option>
                        <option value="3">3/5</option>
                        <option value="4">4/5</option>
                        <option value="5">5/5</option>
                    </select>
                    <input className="submit-btn" type="submit" value="Lägg till" />
                </fieldset>
            </form>
            <hr />
            <h2 className="text-2xl font-bold underline">Filmer</h2>
            <ul>
                {sortedMovies.map((movie, index) => (
                    <li key={index}>
                        {movie.title}
                        {[...Array(parseInt(movie.rating))].map((_, i) => (
                            <img key={i} src={starImg} alt="Star" />
                        ))}
                        <img
                            src={deleteImg}
                            alt="Delete movie"
                            className="delete-movie-icon"
                            onClick={() => handleDelete(index)}
                        />
                    </li>
                ))}
            </ul>
        <SortList sortType="abc" movies={movies} updateMovies={setSortedMovies}/>
        <SortList sortType="rating" movies={movies} updateMovies={setSortedMovies}/>
        </div>
        </>
    );
}

export default MovieSearch;

