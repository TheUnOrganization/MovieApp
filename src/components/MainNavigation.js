import { NavLink } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Movies</NavLink>
                    </li>
                    <li>
                        <NavLink>Signup</NavLink>
                    </li>
                    <li>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="submit" value="Login"/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;