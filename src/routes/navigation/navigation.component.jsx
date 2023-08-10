import { React, Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navbar'>
                <nav>
                    <h1>StudyBreak</h1>
                    <NavLink>Link1</NavLink>
                    <NavLink>Link2</NavLink>
                    <NavLink>Link3</NavLink>
                </nav>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;