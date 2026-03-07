import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
  const width = useWindowSize();
  const [toggleHeader, setToggleHeader] = useState(false);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="App">
        <NavBar toggleHeader={toggleHeader} screenWidth={width} />

        <Routes>
          {/* Redirect "/" → "/home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Home */}
          <Route
            path="/home"
            element={
              <HomePage
                toggleHeader={toggleHeader}
                setToggleHeader={setToggleHeader}
              />
            }
          />

          {/* Technologies */}
          <Route
            path="/technologies"
            element={
              <DndProvider backend={HTML5Backend}>
                <TechnologiesPage />
              </DndProvider>
            }
          />

          {/* Projects */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>

        <Footer screenWidth={width} />
      </div>
    </BrowserRouter>
  );
};

export default App;
