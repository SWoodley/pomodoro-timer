import { React, Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <p>I am the navigation component</p>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;