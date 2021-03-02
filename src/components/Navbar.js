import React from 'react'
import { Icon } from 'semantic-ui-react'

  

import '../css/style.scss';

// 🍄plan : router


function Navbar() {
    return (
        <nav id="navbar">
            <div className="navbar_logo">    
                <Icon  name='star' />
                <span>IG Kim</span> 
            </div>

            <ul className='navbar_menu'>

                <li className='navbar_menu_item'>About me</li>              
                <li className='navbar_menu_item'>Projects</li>
                <li className='navbar_menu_item'>Contact</li>
            </ul>

        
        </nav>
    )
}

export default Navbar

