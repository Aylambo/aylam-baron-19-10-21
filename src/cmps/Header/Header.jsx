import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {useMainContext} from '../../services/Context'
import Switch from '@mui/material/Switch';

 
const Header = () => {
  const { isDarkMode, setIsDarkMode} = useMainContext()


    return (
        <header>
            <section>
            <Switch  onClick={() => setIsDarkMode(!isDarkMode)}></Switch>
            <h6>Toggle Dark Mode</h6>
            </section>
            <Link to="/" >
                <h1 className="heading">
                    <span className="header-light">Weather</span> Forecast
                </h1>
            </Link>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
            </nav>
        </header>
    )
}

export default Header