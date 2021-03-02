import React ,{useState} from 'react'
import { Button } from 'semantic-ui-react'

import cars from '../../img/projects/p-cars.jpg';
import javascript_portfolio from '../../img/projects/p-javascript-portfolio.jpg';
import shop from '../../img/projects/p-react-shop.jpg';
import Sign_Up_Form from '../../img/projects/p-Sign-In-Sign-Up-Form-HCJ.jpg';
import road from '../../img/projects/p-the road.jpg';
import react_portfolio from '../../img/projects/p-portfolio_with_React,SCSS.jpg';



function Projects() {

const projectItem = [
    {
    id:0,
    name:" portfolio with React, SCSS" ,
     img:"react_portfolio",
     skills: "React, SCSS",
     github: "https://github.com/IG-Kim2511/me_2021-0301_portfolio-react",
     web_site: "https://ig-kim2511.github.io/me_2021-0301_portfolio-react_build/"  
    },
    {
    id:1,
    name:"shop" ,
     img:'react_portfolio',
     skills: "React",
     github: "https://github.com/IG-Kim2511/z2021-0219_shop",
     web_site: "https://ig-kim2511.github.io/z2021-0219_shop_build/"  
    },
    {
    id:2,
    name:"portfolio with javascript" ,
     img:'react_portfolio',
     skills: "html, css, javascript",
     github: "https://github.com/IG-Kim2511/Portfolio-dream-2020-0901",
     web_site: "https://ig-kim2511.github.io/Portfolio-dream-2020-0901/"  
    },
    {
    id:3,
    name:"Sign_Up_Form" ,
     img:'react_portfolio',
     skills: "html, css, javascript",
     github: "https://github.com/IG-Kim2511/Sign-In-Sign-Up-Form-HCJ-2021-0209-P",
     web_site: "https://ig-kim2511.github.io/Sign-In-Sign-Up-Form-HCJ-2021-0209-P/"  
    },
    {id:4,
    name:"road" ,
     img:'react_portfolio',
     skills: "html, css, javascript",
     github: "https://github.com/IG-Kim2511/the-road-0808-p",
     web_site: "https://ig-kim2511.github.io/the-road-0808-p/"  
    },
    {id:5,
    name:"cars" ,
     img:'react_portfolio',
     skills: "html, css, javascript",
     github: "https://github.com/IG-Kim2511/Cars-HCJ-2021-0206-P",
     web_site: "https://ig-kim2511.github.io/Cars-HCJ-2021-0206-P/"  
    },
]

    return (
        <div id="projects">
            <h1>Projects</h1>
            <div className="project_container ">

                <div className="project_item">            
                    <img src={react_portfolio}  /> 
                    <div className="project_description">
                        <h5>{projectItem[0].name} </h5>
                        <h5>skills: React, SCSS</h5>
                        <Button color='green' href={projectItem[0].github} target="_blank">github</Button>
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
             
             <div className="project_container_line">
                <h3>-----Projects by tutorial video.-----</h3>
                <div>I did it for practice</div>
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
      
                <div className="project_item">            
                <img src={road}  />   
                    <div className="project_description">
                    <h5>{projectItem[4].name} </h5>
                        <h5>skills: html, css, javascript</h5>
                        <Button color='green' href={projectItem[4].github} target="_blank">github</Button>
                        <Button color='green' href={projectItem[4].web_site} target="_blank">web site</Button>
                    </div>
                </div>

                <div className="project_item">            
                    <img src={cars}  /> 
                    <div className="project_description">
                    <h5>{projectItem[5].name} </h5>
                        <h5>skills: html, css, javascript</h5>
                        <Button color='green' href={projectItem[5].github} target="_blank">github</Button>
                        <Button color='green' href={projectItem[5].web_site} target="_blank">web site</Button>
                    </div>
                </div>
             </div>  
             
             
          
        </div>
    )
}

export default Projects

