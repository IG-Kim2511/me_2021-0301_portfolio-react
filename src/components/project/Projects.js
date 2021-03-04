import React ,{useState} from 'react'
import { Button } from 'semantic-ui-react'

import projectItem from './Projects_data'

import react_portfolio from '../../img/projects/p-portfolio_with_React,SCSS.jpg';
import shop from '../../img/projects/p-react-shop.jpg';
import javascript_portfolio from '../../img/projects/p-javascript-portfolio.jpg';
import Sign_Up_Form from '../../img/projects/p-Sign-In-Sign-Up-Form-HCJ.jpg';
import cars from '../../img/projects/p-cars.jpg';
import road from '../../img/projects/p-the road.jpg';

// 🌈plan : map()

function Projects() {

    const projects_img =[react_portfolio,shop]

    return (
        <div id="projects">
            <h1>Projects</h1>

            <div className="project_container ">
                <div className="project_item">            
                <img src={projects_img[0]}/> 
                <div className="project_description">
                    <h5>{projectItem[0].name}</h5>
                    <h5>skills:{projectItem[0].skills}</h5>
                    <Button color='green' href={projectItem[0].github} target="_blank" className="project_btn">github</Button>
                    <Button color='green' href={projectItem[0].web_site} target="_blank">web site</Button>
                </div>
            </div>
            
            </div>

           {/* // 🌈plan : map()
             <div className="project_container ">

                <div className="project_item">            
                    <img src={react_portfolio}  /> 
                    <div className="project_description">
                        <h5>{projectItem[0].name} </h5>
                        <h5>skills: React, SCSS</h5>
                        <Button color='green' href={projectItem[0].github} target="_blank" className="project_btn">github</Button>
                        <Button color='green' href={projectItem[0].web_site} target="_blank">web site</Button>
                    </div>
                </div>

                <div className="project_item">            
                    <img src={shop}  />
                    <div className="project_description">
                        <h5>{projectItem[1].name} </h5>
                        <h5>skills: React</h5>
                        <Button color='green' href={projectItem[1].github} target="_blank">github</Button>
                        <Button color='green' href={projectItem[1].web_site} target="_blank">web site</Button>
                    </div>
                </div>

                <div className="project_item">            
                    <img src={javascript_portfolio}  /> 
                    <div className="project_description">
                        <h5>{projectItem[2].name} </h5>
                        <h5>skills: html, css, javascript</h5>
                        <Button color='green' href={projectItem[2].github} target="_blank">github</Button>
                        <Button color='green' href={projectItem[2].web_site} target="_blank">web site</Button>
                    </div>
                </div>

             </div>            
             
             <div className="project_container">
                <div className="project_item">            
                <img src={Sign_Up_Form}/>
                    <div className="project_description">
                      <h5>{projectItem[3].name} </h5>
                        <h5>skills: html, css, javascript</h5>
                        <Button color='green' href={projectItem[3].github} target="_blank">github</Button>
                        <Button color='green' href={projectItem[3].web_site} target="_blank">web site</Button>
                    </div>
                </div>
      
             </div> 
            */} 
             
          
        </div>
    )
}

export default Projects

