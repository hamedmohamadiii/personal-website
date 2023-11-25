
import './App.css';
import Banner from './component/banner';
import Footer from './component/footer';
import Navbar from './component/navbar';
import Skills from './component/skills';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Projectr from './component/projectr';




// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [theme, settheme] = useState("#ffffff");
  const [container, setcontainer] = useState("#fafafa");
  const [text, settext] = useState("#000000");
  const [skills, setskills] = useState("#ffffff");

  const onThemeLight = () => {

    settheme("#ffffff")
    setcontainer("#fafafa")
    settext("#000000")
    setskills("#ffffff")
  }
  const onThemeDark = () => {

    settheme("#2b282b")
    setcontainer("#3b3936")
    settext("#faf9f7")
    setskills("#375169")
  }
  return (<>
    <div className='' style={{ backgroundColor: theme }}>
      <Router>
        <Navbar theme={theme} text={text} onThemeLight={onThemeLight} onThemeDark={onThemeDark}></Navbar>
        <Banner theme={theme} text={text}></Banner>
        <Skills theme={theme} container={container} text={text} skills={skills} ></Skills>
        {/* <Project theme={theme} container={container} text={text} skills={skills} ></Project> */}
        <Projectr theme={theme} container={container} text={text} skills={skills} ></Projectr>
        <Footer></Footer>
        <Routes>
        </Routes>
      </Router>
    </div>
  </>)
}

export default App;
