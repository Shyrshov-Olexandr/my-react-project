import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

import {genresService} from "../../services";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {Genres} from "../Genres/Genres";
import {Footer} from "../Footer/Footer";

import css from './MoviesList.module.css'

const MoviesList = () => {

    const {movies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1',with_genres:''});

    const [selectedGenres, setSelectedGenres] = useState([]);

    let genresToFilter = genresService.genresToRequest(selectedGenres);

    useEffect(() => {
        dispatch(moviesActions.getAll({with_genres:genresToFilter,page: query.get('page')}));
    }, [dispatch, query, genresToFilter]);

    return (
        <div className={css.body}>
            <div className={css.GenresList}>
                <Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
            </div>

            <div className={css.listOnPage}>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>

            <div className={css.buttonPosition}>
                <button disabled={+query.get('page') - 1 === 0} className={css.button} onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>
                    previous
                </button>

                <button className={css.button} onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>
                    next
                </button>
            </div>

            <Footer/>
        </div>
    );
};

export {
    MoviesList
};