import * as React from 'react';
import  { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <header>
            <h1 className="nabi-text-center nabi-font-montserrat nabi-text-extrabold">Homepage</h1>
            <Link to="/registration">Registration</Link>
        </header>
    );
};

export default Homepage;
