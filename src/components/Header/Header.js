import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import './darkMode.css'
import {moviesActions} from "../../redux";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";


const Header = () => {
    const [theme, setTheme] = useState('light');

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const switchTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const {handleSubmit, register} = useForm();
    const search = async (nameToSearch) => {
        await dispatch(moviesActions.search(nameToSearch.search));
    }

    return (
        <div className={css.Header}>
            <Link to={'/movies'}>MOVIES</Link>

            <div>
                <form onSubmit={handleSubmit(search)}>
                    <div>
                        <input className={css.inputString} placeholder={"Search movie"} {...register('search')} />
                        <button className={css.button} onClick={()=>navigate('/search') }>Search</button>
                    </div>
                </form>
            </div>

            <div>
                <button className={css.button} onClick={switchTheme}>{(theme === 'light') ? 'DARK' : 'LIGHT'}</button>
            </div>

            <UserInfo/>
        </div>
    );
};

export {
    Header
};