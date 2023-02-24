import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import css from "./movieInfo.module.css";
import {moviesActions} from "../../redux";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Footer} from "../Footer/Footer";
import {StarsRating} from "../StarsRating/StarsRating";

const MovieInfo = () => {
    const {selectedMovie} = useSelector((state) => state.movies);

    const dispatch = useDispatch();

    console.log("id", selectedMovie);

    useEffect(() => {
        dispatch(moviesActions.getById(selectedMovie));
    }, [dispatch]);

    if (typeof selectedMovie === "number" || !selectedMovie) {
        return <div>Loading...</div>;
    }

    const {
        poster_path,
        original_title,
        release_date,
        vote_average,
        overview,
        original_language,
        budget,
        revenue,
        genres,
        tagline,
    } = selectedMovie;

    return (
        <div>
            <div className={css.Container}>
                <div>

                    <div><p className={css.Title}>{original_title.toUpperCase()}</p>
                        {tagline && <p className={css.FieldValue}>"{tagline}"</p>}
                    </div>

                    <div className={css.InfoPoster}>
                        <div>

                            <div>
                                <img
                                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                                    alt={original_title}
                                    className={css.Poster}
                                />
                                <div className={css.Raiting}>
                                    <StarsRating rating={vote_average}/>
                                </div>
                            </div>

                        </div>

                        <div className={css.badgeinfo}>
                            <div className={css.badgeBlock}>
                                {
                                    genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                                }
                            </div>

                            <div className={css.Info}>
                                <div className={css.FieldBlock}>
                                    <p className={css.Field}>Release date:</p>
                                    <p className={css.FieldValue}>{release_date}</p>
                                </div>

                                <div className={css.FieldBlock}>
                                    <p className={css.Field}>Language:</p>
                                    <p className={css.FieldValue}>{original_language}</p>
                                </div>

                                <div className={css.FieldBlock}>
                                    <p className={css.Field}>Budget:</p>
                                    <p className={css.FieldValue}>{budget}$</p>
                                </div>

                                <div className={css.FieldBlock}>
                                    <p className={css.Field}>Revenue:</p>
                                    <p className={css.FieldValue}>{revenue}$</p>
                                </div>

                                <div className={css.FieldValue}>{overview}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export {MovieInfo};