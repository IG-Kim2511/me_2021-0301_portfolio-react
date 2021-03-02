import React from 'react'

import cars from '../../img/projects/p-cars.jpg';
import bbc from '../../img/projects/p-bbc.jpg';
import javascript_portfolio from '../../img/projects/p-javascript-portfolio.jpg';
import shop from '../../img/projects/p-react-shop.jpg';
import Sign_Up_Form from '../../img/projects/p-Sign-In-Sign-Up-Form-HCJ.jpg';
import road from '../../img/projects/p-the road.jpg';


const Projects = () => {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div className="container">
             <div className="project_item">            
             <img src={javascript_portfolio}  />
             <div className="intro">
             <h4>skills</h4>
             <p>html, css, javascript</p>
             </div>
             </div>
             
             <img src={Sign_Up_Form} 
             />
             <img src={bbc}  />
             
             <img src={shop}  />
             <img src={road}  />                
             <img src={cars}  />            
            </div>
        </div>
    )
}

export default Projects
