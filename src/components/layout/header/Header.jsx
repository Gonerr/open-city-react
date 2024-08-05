import React from 'react';
import h from './Header.module.css';
import logo from '../../shared/logo.png';
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <div className={h.mainContainer}>
            <div className={h.upperContainer}>
                <div className={h.allLinks}>
                    <div> вк</div>
                    <div> вк</div>
                    <div> вк</div>
                </div>
                <img className={h.image} src={logo} alt="logo"/>
                <input className={h.textSearch} type={"text"} value={"Поиск"}/>

            </div>
            <div className={"delimeter"}/>
            <Navbar/>
        </div>
    );
};

export default Header;