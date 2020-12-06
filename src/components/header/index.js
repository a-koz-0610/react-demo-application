import React from 'react';

import style from './style.module.scss';

const Header = () => {
    return (
        <div className={style.header__container}>
            <h1>THIS IS MY HEADER</h1>
            <p>Welcome to my application</p>
        </div>
    )
}

export default Header;