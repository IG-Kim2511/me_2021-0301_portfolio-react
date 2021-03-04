import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'


function Skills() {

    const skill_kim=[
        {id:0,
        icon:"html5"},
        {id:1,
        icon:"css3"},
        {id:2,
        icon:"js"},
        {id:3,
        icon:"react"},
        {id:4,
        icon:"sass"},
        {id:5,
        icon:"git"}   
    ]
   
    return (
        <div id="skills">
            <h1>skills</h1>
            <div className="about_skills">
                
                {/*  // 🌈map()
                    <div>
                        <Icon name={skill_kim[0].icon} className="skill_icon"/>
                        <p>{skill_kim[0].icon}</p>
                    </div> */}
                
                {
                    skill_kim.map((a,i)=>{
                        return      <div>
                        <Icon name={skill_kim[i].icon} className="skill_icon"/>
                        <p>{skill_kim[i].icon}</p>
                        </div>
                    })
                }               
            </div>

            <br></br>
            <div className="about_skills">
            </div>

        </div>
    )
}

export default Skills
