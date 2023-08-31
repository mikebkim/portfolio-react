import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Pages
import HomePage from "./components/HomePage/HomePage";
import TechnologiesPage from "./components/TechnologiesPage/TechnologiesPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";

// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/FooterBar/FooterBar";
import "./App.css";

// Images
import MK_Resume from "./files/MK_Resume.pdf";

// Icons
import blackjackicon from "./icons/blackjackicon.png";
import gameiticon from "./icons/gameiticon.png";
import marbleicon from "./icons/marbleicon.png";
import sessionsicon from "./icons/sessionsicon.png";
import personal_logo from "./icons/personal_logo.png";

const App = () => {
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

  const [toggleHeader, setToggleHeader] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar personalLogo={personal_logo} toggleHeader={toggleHeader} />
        {toggleHeader ? (
          <div
            className="dont-click-fix"
            onClick={() => setToggleHeader(!toggleHeader)}
          >
            FIX ME!
          </div>
        ) : (
          <div
            className="dont-click"
            onClick={() => setToggleHeader(!toggleHeader)}
          >
            DON'T CLICK ME!
          </div>
        )}
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            exact
            path="/home"
            element={
              <HomePage
                resume={MK_Resume}
                setToggleHeader={setToggleHeader}
                toggleHeader={toggleHeader}
              />
            }
          />
          <Route
            exact
            path="/technologies"
            element={
              <DndProvider backend={HTML5Backend}>
                <TechnologiesPage
                  allImages={allImages}
                  toggleHeader={toggleHeader}
                />
              </DndProvider>
            }
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
                allImages={allImages}
                toggleHeader={toggleHeader}
              />
            }
          />
          <Route
            exact
            path="/contact"
            element={<ContactPage toggleHeader={toggleHeader} />}
          />
        </Routes>
      </Router>
      <React.Fragment>
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default App;
