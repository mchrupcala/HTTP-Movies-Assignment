import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    star: ''
  };

  //pass in movies props list from App --> movielist --> UpdateMovie

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);

    const { match, movies } = props;

    useEffect(() => {
    const id = match.params.id;
    const movieToUpdate = movies.find(movie => `${movie.id}` === id);
    
    if (movieToUpdate) {
      console.log('Here: ', movieToUpdate);
        setMovie(movieToUpdate)
    }
    }, [match, movies]);

    const handleChange = e => {
        // e.persist();
        // let value = e.target.value;
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => {
            console.log(res);
            setMovie(initialMovie);
            props.history.push(`/movies/${movie.id}`)
        })
        .catch(err => console.log(err))
    }



    return (
        <form className="update-form" onSubmit={handleSubmit}>
            <input
            type="text"
            name='title'
            value={movie.title}
            onChange={handleChange}>
                
            </input>

            <input
            type="text"
            name='director'
            value={movie.director}
            onChange={handleChange}>
                
            </input>
            
            <input
            type="text"
            name='metascore'
            value={movie.metascore}
            onChange={handleChange}>
                
            </input>

            <input
            type="text"
            name='stars'
            value={movie.stars}
            onChange={handleChange}>
                
            </input>
            
            <button type="submit">
                Update
            </button>
        </form>
    )
}

export default UpdateMovie