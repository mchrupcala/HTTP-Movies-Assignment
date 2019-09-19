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

    return (
        <form className="update-form">
            <input
            type="text"
            placeholder={movie.title}>
                
            </input>

            <input
            type="text"
            placeholder={movie.director}>
                
            </input>
            
            <input
            type="text"
            placeholder={movie.metascore}>
                
            </input>

            <input
            type="text"
            placeholder={movie.stars}>
                
            </input>
            
            <button>
                Update
            </button>
        </form>
    )
}

export default UpdateMovie