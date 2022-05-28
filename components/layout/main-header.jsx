import React from 'react';
import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader(props) {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <Link href='/events'>Brows All Events</Link>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;