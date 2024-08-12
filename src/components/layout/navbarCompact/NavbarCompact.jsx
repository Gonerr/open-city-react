import React from 'react';
import nb from './NavbarCompact.module.css';
import { Link } from 'react-router-dom';
import logo from '../../shared/logo.png';

const NavbarCompact = () => {
    const pages = [
        { name: "Главная", path: "/" },
        { name: "Маршруты", path: "/routes" },
        { name: "Галерея", path: "/gallery" },
        { name: "О проекте", path: "/about" },
        { name: "Контакты", path: "/contacts" }
    ];

    return (
        <nav className={nb.navbar}>
            <Link to={"/routes"} className={nb.navLink}> Маршруты </Link>
            <Link to={"/gallery"} className={nb.navLink}> Галерея </Link>
            <img className={nb.image} src={logo} alt="logo"/>
            <Link to={"/about"} className={nb.navLink}> О проекте</Link>
            <Link to={"/contacts"} className={nb.navLink}> Контакты </Link>
        </nav>
    );
};

export default NavbarCompact;