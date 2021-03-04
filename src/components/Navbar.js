import React from 'react'
import { Icon } from 'semantic-ui-react'


import '../css/style.scss';

// 🌈plan : router


function Navbar() {
    return (
        <nav id="navbar">
            <div className="navbar_logo">    
                <Icon  name='star' className="navbar_icon"/>
                <a href="#app_aboutme">IG Kim</a> 
            </div>

            <ul className='navbar_menu'>
                <a href="#app_aboutme" className='navbar_menu_item'>About me</a>              
                <a href="#app_projects" className='navbar_menu_item'>Projects</a>
                <a href="#app_contact" className='navbar_menu_item'> Contact</a>
            </ul>
        </nav>
    )
}

export default Navbar

