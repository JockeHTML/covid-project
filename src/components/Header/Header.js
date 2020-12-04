import React from 'react';
import styles from './Header.module.css';

function Header(props) {
    return (
        <div className={styles.header}>
            <img src="./icons/svg.svg" alt=""/>
            <h1>Covid 19 Tracker</h1>
        </div>
    );
}

export default Header;