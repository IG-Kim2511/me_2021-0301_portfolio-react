 /* eslint-disable */

 {/* library */}
 import 'semantic-ui-css/semantic.min.css'
 import { Icon } from 'semantic-ui-react'
  {/* <Icon disabled name='star' /> */}


 {/* components */}
 import './App.css';

 
 import Menubar from './components/Menubar'
 import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Language from './components/Language'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  return (
    <div className="App">
      <div>menu</div>

      <Icon disabled name='star' />

        IG Kim
        <Icon disabled name='mail' />
        <Icon disabled name='linkedin' />
        <Icon disabled name='github' />

        <Menubar></Menubar>
        <Aboutme/>
        
        <Projects></Projects>

        <Language></Language>

        <Skills></Skills>

        <Contact></Contact>

    </div>
  );
}

export default App;
