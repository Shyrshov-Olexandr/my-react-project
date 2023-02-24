import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {useTheme} from "@mui/material";

import {MainLayout} from "./layouts";
import {MoviesPage, MovieDetailsPage, SearchPage} from "./pages";
import './App.css'


const App = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:idMovie'} element={<MovieDetailsPage/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
