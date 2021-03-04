import React ,{useState} from 'react'
import { Button } from 'semantic-ui-react'

import projectItem from './Projects_data'

import portfolio_react from '../../img/projects/p-portfolio_with_React,SCSS.jpg';
import shop from '../../img/projects/p-react-shop.jpg';
import portfolio_javascript from '../../img/projects/p-javascript-portfolio.jpg';
import Sign_Up_Form from '../../img/projects/p-Sign-In-Sign-Up-Form-HCJ.jpg';
import cars from '../../img/projects/p-cars.jpg';
import road from '../../img/projects/p-the road.jpg';

// 🌈plan : map()

function Projects() {

    const projects_img =[portfolio_react,shop,portfolio_javascript, Sign_Up_Form]

    return (
        <div id="projects">
            <h1>Projects</h1>

            <div className="project_container">
              {/* // 🌈 map()
                   <div className="project_item">            
                    <img src={projects_img[0]}/> 
                    <div className="project_description">
                        <h5>{projectItem[0].name}</h5>
                        <h5>skills:{projectItem[0].skills}</h5>
                        <Button color='green' href={projectItem[0].github} target="_blank" className="project_btn">github</Button>
                        <Button color='green' href={projectItem[0].web_site} target="_blank">web site</Button>
                    </div>
                </div>  */}    
     
            {
                projects_img.map((a,i)=>{
                    return   <div className="project_item">            
                        <img src={projects_img[i]}/> 
                        <div className="project_description">
                            <h5>{projectItem[i].name}</h5>
                            <h5>skills:{projectItem[i].skills}</h5>
                            <Button color='green' href={projectItem[i].github} target="_blank" className="project_btn">github</Button>
                            <Button color='green' href={projectItem[i].web_site} target="_blank">web site</Button>
                    </div>
                </div>         
                })
            } 
            </div>          
        </div>
    )
}

export default Projects

