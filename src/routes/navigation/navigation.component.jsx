import { React, Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navbar'>
                <h2 class="visually-hidden">Navigation</h2>
                <nav className='wrapper'>
                    <h1 class='navbar__home'>StudyBreak</h1>
                    <NavLink path='/about' class='navbar__link'>About</NavLink>
                    <NavLink path='/about' class='navbar__link'>Misc1</NavLink>
                    <NavLink path='/about' class='navbar__link'>Misc2</NavLink>
                </nav>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;