import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

// 🌈plan : map()

function Skills() {
    const [skill, setskill] = useState( [ 
        "html5", "css3", "js", "react","sass", "git" 
    ])
   
    return (
        <div id="skills">
            <h1>skills</h1>
            <div className="about_skills">
                <div>
                    <Icon name='html5' className="skill_icon"/>
                    <p>{skill[0]}</p>
                </div>
                <div>
                    <Icon name='css3' className="skill_icon"/>
                    <p>{skill[1]}</p>
                </div>
                <div>
                    <Icon name='js' className="skill_icon"/>
                    <p>{skill[2]}</p>
                </div>
                <div>
                    <Icon name='react' className="skill_icon"/>
                    <p>{skill[3]}</p>
                </div>
                <div>
                    <Icon name='sass' className="skill_icon"/>
                    <p>{skill[4]}</p>
                </div>
                <div>
                    <Icon name='git' className="skill_icon"/>
                    <p>{skill[5]}</p>
                </div>              
            </div>

        </div>
    )
}

export default Skills
