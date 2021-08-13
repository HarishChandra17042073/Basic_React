import React from 'react'
import {Link} from "react-router-dom";

function Error() {
    return (
        <div>
            <h2>Error 404 not found</h2>
            <Link to="/" className="btn">
                Go Back to Homepage
            </Link>
        </div>
    )
}

export default Error
