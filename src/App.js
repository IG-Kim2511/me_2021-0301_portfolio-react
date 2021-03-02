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
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  return (
    <div className="App"> 

       

        <Navbar></Navbar>

        <Aboutme/>
        <Language></Language>
        <Skills></Skills>        
        <Projects></Projects>
        <Contact></Contact>

        <div>
          <Icon disabled name='star' />

          {/* IG Kim */}
          <Icon disabled name='mail' />
          <Icon disabled name='linkedin' />
          <Icon disabled name='github' />
        </div>

    </div>
  );
}

export default App;
