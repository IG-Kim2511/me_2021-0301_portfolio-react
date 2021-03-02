import React from 'react'
import { Icon } from 'semantic-ui-react'


import '../css/style.scss';

// import styled from 'styled-components'

// const Nav = styled.div`
// position:fixed;
// bottom:0;
// left: 25%;

// display:flex;
// width: 560px;
// height: 120px;

// background-color: #bdbdbd;
// transform: traslateX(-50%);
// border-top-left-radius : 25px;
// border-top-right-radius : 25px;
// `

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="navbar_logo">    
                <Icon  name='star' />
                <span>IG Kim</span> 
            </div>

            <ul className='navbar_menu'>
                <li className='navbar_menu_item'>about me</li>
                <li className='navbar_menu_item'>language</li>
                <li className='navbar_menu_item'>skills</li>
                <li className='navbar_menu_item'>project</li>
                <li className='navbar_menu_item'>contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
