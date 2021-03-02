import React from 'react'
import styled from 'styled-components'
import MenuButton from './MenuButton'


const Menu = styled.div`
position:fixed;
bottom:0;
left: 25%;

display:flex;
width: 560px;
height: 120px;

background-color: #bdbdbd;
transform: traslateX(-50%);
border-top-left-radius : 25px;
border-top-right-radius : 25px;
`

const Menubar = () => {
    return (
        <div>
            <Menu>
                Menu
                <MenuButton></MenuButton>
            </Menu>
        </div>
    )
}

export default Menubar
