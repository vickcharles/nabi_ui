import * as React from 'react';
import  { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';

const Homepage = () => {
    return (
        <header>
            <Typography variant="title" className="nabi-margin-top-medium nabi-margin-bottom-medium">
                HOMEPAGE
            </Typography>
            <Link to="/registration">Registration</Link>
        </header>
    );
};

export default Homepage;
