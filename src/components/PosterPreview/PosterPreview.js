import React from 'react';

import "./poster.css"

const PosterPreview = ({movie}) => {

    return (
        <div >
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className={"img"}/>
        </div>
    );
};

export {
    PosterPreview
};