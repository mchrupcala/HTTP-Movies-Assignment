import React from 'react';

const UpdateMovie = props => {
    console.log(props);
    
    return (
        <form>
            <input
            type="text">
                {props.title}
            </input>

            <input
            type="text">
                {props.director}
            </input>
            
            <input
            type="text">
                {props.metascore}
            </input>

            <input
            type="text">
                {props.star}
            </input>
            
            <button>
                Update
            </button>
        </form>
    )
}

export default UpdateMovie