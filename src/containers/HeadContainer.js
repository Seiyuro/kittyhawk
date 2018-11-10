import React from 'react';
import { slide as Menu } from 'react-burger-menu'

const HeadContainer = () => {
    return (
        <div className="header__container">
            <div className="logo__kitty"> </div>
            <div className="burger__nav"> 
                <Menu right>
                    <a id="home" className="menu-item menus" href="/">Home &#x25B6;</a>
                    <a id="about" className="menu-item menus" href="/users">User &#x25B6;</a>
                    <a id="about" className="menu-item menus" href="/map">Map &#x25B6;</a>
                </Menu>
            </div>
            
        </div>
    )
}

export default HeadContainer
