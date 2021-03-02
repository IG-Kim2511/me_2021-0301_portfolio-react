    import React from 'react'
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

import '../App.css';

const Contact = () => {
    return (
        <div>        
            <h3>Let's talk</h3>                    
            <h3>iikim2511@gmail.com</h3>

            <div className="contact_links">          
                <a href="https://www.linkedin.com/in/ig-in-gyum-kim-17456219b/" target="_blank"> <Icon name='linkedin' className="icon"/></a>
                <a color='green' href="https://github.com/IG-Kim2511" target="_blank"> <Icon name='github' className="icon"/>
                </a>

                {/*     <a href="https://github.com/IG-Kim2511" target="_blank"><Icon name='mail' className="icon"/></a> */}         
            </div> 
        </div>
    )
}

export default Contact
