 /* eslint-disable */

 {/* library */}
 import 'semantic-ui-css/semantic.min.css'
 import { Icon } from 'semantic-ui-react'
  {/* <Icon disabled name='star' /> */}


 {/* components */}
 import './App.css';
 import './css/style.scss';

 
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Language from './components/language/Language'
import Projects from './components/project/Projects'
import Skills from './components/Skills'


function App() {
  return (
    <div className="App"> 

        <Navbar></Navbar>

        <div id="app_aboutme">
          <Aboutme/>
        </div>

        <Language></Language>
        <Skills></Skills>     
           
        <div id="app_projects">
          <Projects></Projects>
        </div>

        <div id="app_contact">
         <Contact></Contact>
        </div>
       

    </div>
  );
}

export default App;
