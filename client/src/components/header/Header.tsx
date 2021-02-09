import React from 'react'
import {NavLink} from "react-router-dom"

export const Header:React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/register">SignUp</NavLink></li>
                    <li><NavLink to="/login">LogIn</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
