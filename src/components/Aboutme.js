import React from 'react'
import { Button } from 'semantic-ui-react'

import avatar2 from '../img/avatar2.jpg';


const Aboutme = () => {
    return (
        <div id='home'>
        
         <img src={avatar2} className="avatar" />
            
            <h1></h1>
            <h1>Hello. I'm IG Kim.</h1>
            <div>
                (My full name is 'In-gyum Kim')
                <br></br>

                A junior web developer currently residing in North Carolina.
                (I don't need a sponsership :) )
                <br></br>

                I'm a self-taught front-end web developer learned with online Bootcamp and Udemy.
                <br></br>
          
            </div>
            <Button color='green'  class="my_github" href="https://github.com/IG-Kim2511" target="_blank">my github</Button>

            <Button color='green'  class="my_github" href="https://www.linkedin.com/in/ig-in-gyum-kim-17456219b/" target="_blank">linkedin</Button>
            

        </div>
    )
    }

export default Aboutme
