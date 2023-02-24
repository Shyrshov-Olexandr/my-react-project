import React from 'react';
import {Chip} from "@mui/material";

import css from './badge.css'
const GenreBadge = ({genre}) => {

    return (
        <div className={css.badgeBlock} >
            <Chip style={{backgroundColor: "#f2c53d", padding: 10, margin: 2}} size={"small"} label={genre.name} />

        </div>

    );
};

export {
    GenreBadge
};