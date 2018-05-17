import * as React from 'react';
import  { Link } from 'react-router-dom';
import PageTitle from './PageTitle';
import BackgroundImageSection from './HomeBackgroundSection';

const Homepage = () => {
    return (
        <div>
            <PageTitle pageTitle="HOMEPAGE" />
            <Link to="/registration">Registration</Link>
            <BackgroundImageSection />
        </div>
    );
};

export default Homepage;
