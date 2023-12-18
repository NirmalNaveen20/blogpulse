import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/about">About</link>
                </li>
                <li>
                    <link to="/articles">Articles</link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;