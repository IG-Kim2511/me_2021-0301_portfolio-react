import React from 'react'
import { Icon } from 'semantic-ui-react'


{/* I'll make it with map loop */}

const Skills = () => {
    return (
        <div id="skills">
            <h1>skills</h1>
            <div className="about_skills">
                    <div>
                        <Icon disabled name='html5' className="skill_icon"/>
                        <p>html</p>
                    </div>
                    <div>
                        <Icon disabled name='css3' />
                        <p>css3</p>
                    </div>
                    <div>
                        <Icon disabled name='js' />
                        <p>js</p>
                    </div>
                    
                    <div>
                    <Icon disabled name='react' />
                        <p>react</p>
                    </div>
                    <div>
                    <Icon disabled name='sass' />
                        <p>sass</p>
                    </div>  
                    <div>
                    <Icon disabled name='git' />
                        <p>git</p>
                    </div>
                    <div>
                        and jQuery, Semantic-UI
                    </div>
                </div>

        </div>
    )
}

export default Skills
