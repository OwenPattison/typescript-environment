import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/another-page">Another Page</Link>
                </li>
            </ul>
        </div>
    );
};

export {
    Header
};
