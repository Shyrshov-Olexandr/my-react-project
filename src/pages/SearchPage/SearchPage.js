import React from 'react';
import {Search} from "../../components";
import {Outlet} from "react-router-dom";

const SearchPage = () => {
    return (
        <div>
            <Search/>
            <Outlet/>
        </div>
    );
};

export {
    SearchPage
};