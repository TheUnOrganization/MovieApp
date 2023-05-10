import { NavLink } from 'react-router-dom';

function MainNavigation() {
    return (
        <header id="main-nav">
            <nav>
                <ul>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Movies</NavLink>
                    </li>
                    <li>
                        <NavLink>Now Playing</NavLink>
                    </li>
                    <li>
                        <NavLink>Signup</NavLink>
                    </li>
                    <li>
                        <input type="text" size="12" placeholder="Username"/>
                        <input type="password" size="12" placeholder="Password"/>
                        <input type="submit" value="Login"/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;