import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './search.module.css'

const Search = () => {

    const {searchMovies} = useSelector(state => state.movies);

    const {results} = searchMovies;

    return (
        <div className={css.body}>
            <div className={css.List}>
                {
                    results && results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export {
    Search
};