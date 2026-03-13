import React, { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/FooterBar/FooterBar";
import { useWindowSize } from "./hooks/useWindowSize";
import "./App.css";

import MK_Resume from "./files/MK_Resume.pdf";
import personal_logo from "./icons/personal_logo.png";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const TechnologiesPage = lazy(
  () => import("./components/TechnologiesPage/TechnologiesPage"),
);
const ProjectsPage = lazy(
  () => import("./components/ProjectsPage/ProjectsPage"),
);
const ContactPage = lazy(() => import("./components/ContactPage/ContactPage"));

const App = () => {
  const screenWidth = useWindowSize();
  const [toggleHeader, setToggleHeader] = useState(false);

  return (
    <div className="App">
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <NavBar
          personalLogo={personal_logo}
          screenWidth={screenWidth}
          resume={MK_Resume}
        />

        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />

            <Route
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
              path="/technologies"
              element={
                <TechnologiesPage
                  screenWidth={screenWidth}
                  toggleHeader={toggleHeader}
                />
              }
            />

            <Route
              path="/projects"
              element={<ProjectsPage toggleHeader={toggleHeader} />}
            />

            <Route
              path="/contact"
              element={<ContactPage toggleHeader={toggleHeader} />}
            />
          </Routes>
        </Suspense>
      </Router>

      <Footer screenWidth={screenWidth} />
    </div>
  );
};

export default App;
