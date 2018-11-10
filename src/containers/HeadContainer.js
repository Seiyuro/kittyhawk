import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/burger.css'

const HeadContainer = () => {
    return (
        <div className="headerContainer">
            <Menu right>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
            </Menu>
        </div>
    )
}

export default HeadContainer
