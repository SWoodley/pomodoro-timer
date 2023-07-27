import { React, Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navbar'>I am the navigation component</div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;