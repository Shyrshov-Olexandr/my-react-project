import React from 'react';
import {Outlet} from "react-router-dom";
import {MovieInfo} from "../../components";

const MovieDetailsPage = () => {
    return (
        <div>
            <MovieInfo/>
            <Outlet/>
        </div>
    );
};

export {
    MovieDetailsPage
};