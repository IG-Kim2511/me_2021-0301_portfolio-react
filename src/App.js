 /* eslint-disable */

 {/* library */}

 {/* components */}
import { Router } from 'react-router-dom';
 import './App.css';
//  import { Button } from 'react-bootstrap';




import Aboutme from './components/Aboutme'
import Foot from './components/Foot'
import Language from './components/Language'
import Projects from './components/Projects'
import Skills from './components/Skills'


 /* plan
 flexbox class
 styled component
 bootstrap grid-responsive
 bootstrap icon
 */

function App() {
  return (
    <div className="App">
    

        
        <ul class="navbar__menu">
        
        <li class="navbar__menu__item active" data-link="#home">Home</li>
        <li class="navbar__menu__item" data-link="#about">About</li>
        <li class="navbar__menu__item" data-link="#work">My Work</li>
    
        <li class="navbar__menu__item" data-link="#contact">Contact</li>
      </ul>
      <button class="navbar__toggle-btn">
        btn

      <svg xmlns="http://www.w3.org/2000/svg" width="106" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal-fill" viewBox="0 0 16 16">
      <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z"/>
     </svg>
     <i class="fab fa-affiliatetheme"></i>

     <i class="bi bi-facebook"></i>
      <div>
      <i class="bi bi-arrow-bar-right"></i>
      
      
      </div>
  
        <Aboutme/>
        
        <Projects></Projects>

        <Language></Language>

        <Skills></Skills>

        <Foot></Foot>

    </div>
  );
}

export default App;
