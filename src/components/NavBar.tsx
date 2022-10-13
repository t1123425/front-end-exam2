import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar:React.FC = () => {
    return (
        <nav>
            <h1>LOGO</h1>
            <ul className='linkName'>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tags">
                        Tags
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar