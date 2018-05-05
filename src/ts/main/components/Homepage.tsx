import * as React from 'react';
import  { Link } from 'react-router-dom';
import PageTitle from './PageTitle';

/** 
 * Homepage Stateless Component
 */
const Homepage = () => {
    return (
        <div>
            <PageTitle pageTitle="HOMEPAGE" />
            <Link to="/registration">Registration</Link>
        </div>
    );
};

export default Homepage;
