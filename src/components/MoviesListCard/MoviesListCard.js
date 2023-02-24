import React from 'react';

import {Link} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";

import css from "./card.module.css"

import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import {StarsRating} from "../StarsRating/StarsRating";


const MoviesListCard = ({movie}) => {

    const {id, original_title,vote_average} = movie


    const dispatch = useDispatch();
    return (
        <div className={css.card}>
            <Link to={'/movies/' + id.toString()} onClick={() => dispatch(moviesActions.setSelectedMovie(id))}>

                <div className={css.inner}>
                    <div className={css.PosterTitle}>
                        <PosterPreview movie={movie}/>
                        <p className={css.name}>{original_title}</p>
                    </div>

                    <StarsRating rating={vote_average}/>
                </div>

            </Link>
        </div>
    );
};

export {
    MoviesListCard
};