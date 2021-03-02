import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'


{/* I'll make it with map loop */}



function Skills() {
    const [skill, setskill] = useState( [ 
        "html5", "css3", "js", "react","sass", "git" 
    ])
   
    return (
        <div id="skills">
            <h1>skills</h1>
            <div className="about_skills">
                <div>
                    <Icon disabled name='html5' className="skill_icon"/>
                    <p>{skill[0]}</p>
                </div>
                <div>
                    <Icon disabled name='css3' className="skill_icon"/>
                    <p>{skill[1]}</p>
                </div>
                <div>
                    <Icon disabled name='js' className="skill_icon"/>
                    <p>{skill[2]}</p>
                </div>
                <div>
                    <Icon disabled name='react' className="skill_icon"/>
                    <p>{skill[3]}</p>
                </div>
                <div>
                    <Icon disabled name='sass' className="skill_icon"/>
                    <p>{skill[4]}</p>
                </div>
                <div>
                    <Icon disabled name='git' className="skill_icon"/>
                    <p>{skill[5]}</p>
                </div>              
            </div>

        </div>
    )
}

export default Skills
