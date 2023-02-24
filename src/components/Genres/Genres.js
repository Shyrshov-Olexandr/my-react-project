import React, {useEffect} from 'react';

import css from './genres.module.css'

import {genresAction, moviesActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";

import {Chip} from "@mui/material";
const Genres = ({setSelectedGenres, selectedGenres}) => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genresAction.getAllGenres());
    }, [dispatch]);

    const addGenres = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        genres.filter(eg => eg.id !== genre.id)
        dispatch(genresAction.getAllGenres())
    }

    const removeGenres = genre => {
        setSelectedGenres(
            selectedGenres.filter(selected => selected.id !== genre.id)
        )
        moviesActions.getAll(selectedGenres)
    }

    return (
        <div className={css.genreTags}>
            {
                selectedGenres?.map((genre) => <Chip
                    key={genre.id}
                    label={genre.name}
                    onDelete={() => removeGenres(genre)}
                    style={{backgroundColor:"#94c6f2", padding: 10, margin: 2}}
                />)
            }
            {
                genres.map(genre => {
                    return <Chip key={genre.id}
                                 onClick={() => addGenres(genre)}
                                 label={genre.name}
                                 style={{backgroundColor:"#f2c53d", padding: 10, margin: 2}}
                    />
                })
            }
        </div>
    );
};

export {
    Genres
};