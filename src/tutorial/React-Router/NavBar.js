import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="item">Home</Link> {/*This is how we create links in React-dom to navigate to diff containers*/ }
                </li>
                <li>
                    <Link to="/about" className="item">About</Link>
                </li>
                <li>
                    <Link to="/people" className="item">People</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
