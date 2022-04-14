import { NavLink } from 'react-router-dom';
import './Menu.scss'

function Menu() {
    return (
        <nav className="sibebar__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink className="menu__link" to="/profile">Profile</NavLink>
                </li>

                <li className="menu__item">
                    <NavLink className="menu__link" to="/users">Users</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/dialogs">Message</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/news">News</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/music">Music</NavLink>
                </li>


                <li className="menu__item">
                    <NavLink className="menu__link" to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu