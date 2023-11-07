import { React, Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navbar'>
                <h2 class="visually-hidden">Navigation</h2>
                <nav className='wrapper'>
                    <NavLink to='/' id='navbar__home'>StudyBreak</NavLink>
                    <NavLink to='/about'  class='navbar__link'>About</NavLink>
                    <NavLink to='/settings' class='navbar__link'>Settings</NavLink>
                </nav>
            </div>
            <body>
                <Outlet />
            </body>
        </Fragment>
    )
}

export default Navigation;