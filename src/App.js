 /* eslint-disable */

 {/* library */}
 import 'semantic-ui-css/semantic.min.css'
 import { Icon } from 'semantic-ui-react'
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 {/* components */}
 import './App.css';
 import './css/style.scss';

 
// import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Language from './components/language/Language'
import Projects from './components/project/Projects'
import Skills from './components/Skills'


function App() {
  return (
    <div className="App"> 

        <nav id="navbar">
          <div className="navbar_logo">    
              <Icon  name='star' />
              <span>IG Kim</span> 
          </div>

          <ul className='navbar_menu'>

              <li className='navbar_menu_item'><Link to="/">About me</Link> </li>              
              <li className='navbar_menu_item'><Link to="/projects">Projects</Link> </li>
              <li className='navbar_menu_item'><a href="#contact">Contact</a></li>             
          </ul>
        </nav>

        {/* <Navbar></Navbar> */}

        <Switch>
          <Route exact path="/">
            <Aboutme/>
            <Language></Language>
            <Skills></Skills>   
          </Route>   

          <Route path="/projects">
            <Projects></Projects>
          </Route>
        </Switch>
          
        <section id="contact">        
          <h3>Let's talk</h3>                    
          <h3>iikim2511@gmail.com</h3>

          <div className="contact_links">          
              <a href="https://www.linkedin.com/in/ig-in-gyum-kim-17456219b/" target="_blank"> <Icon name='linkedin' className="icon"/></a>
              <a color='green' href="https://github.com/IG-Kim2511" target="_blank"> <Icon name='github' className="icon"/>
              </a>

              {/*     <a href="https://github.com/IG-Kim2511" target="_blank"><Icon name='mail' className="icon"/></a> */}         
          </div> 
         </section>

         
        {/* <Contact></Contact>      */}

    </div>
  );
}

export default App;
