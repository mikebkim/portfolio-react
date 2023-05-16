import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import HomePage from "./components/HomePage/HomePage";
import TechnologiesPage from "./components/TechnologiesPage/TechnologiesPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";

// Components
import NavBar from "./components/NavBar/NavBar";
// import Switch from "@mui/material/Switch";
import "./App.css";

// Images
import MK_Resume from "./files/MK_Resume.pdf";

// Icons
// import download from "./icons/05_download.png";
import blackjackicon from "./icons/blackjackicon.png";
import gameiticon from "./icons/gameiticon.png";
import marbleicon from "./icons/marbleicon.png";
import sessionsicon from "./icons/sessionsicon.png";
import personal_logo from "./icons/personal_logo.png";

const App = () => {
  // const [toggleDark, setToggleDark] = useState(false);

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const allImages = importAll(
    require.context("./images", false, /\.(png|jpe?g|svg)$/)
  );

  // function toggleDarkMode() {
  //   var element = document.body;
  //   element.classList.toggle("dark-mode");
  //   setToggleDark(!toggleDark);
  // }

  return (
    <div className="App">
      {/* <div className="dark-button">
        {toggleDark === false ? <div>DARK</div> : <div>LIGHT</div>}
        <div
          className="toggle"
          onClick={toggleDarkMode}
        >
          <Switch color="default" />
        </div>
      </div> */}
      <Router basename="/">
        <NavBar personalLogo={personal_logo} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<HomePage resume={MK_Resume} />} />
          <Route
            exact
            path="/technologies"
            element={<TechnologiesPage allImages={allImages} />}
          />
          <Route
            exact
            path="/projects"
            element={
              <ProjectsPage
                iconBlackjack={blackjackicon}
                iconMarble={marbleicon}
                iconSessions={sessionsicon}
                iconGameit={gameiticon}
              />
            }
          />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      {/* <NavBar personalLogo={personal_logo} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<HomePage resume={MK_Resume} />} />
        <Route
          exact
          path="/technologies"
          element={<TechnologiesPage allImages={allImages} />}
        />
        <Route
          exact
          path="/projects"
          element={
            <ProjectsPage
              iconBlackjack={blackjackicon}
              iconMarble={marbleicon}
              iconSessions={sessionsicon}
              iconGameit={gameiticon}
            />
          }
        />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes> */}
    </div>
  );
};

export default App;
