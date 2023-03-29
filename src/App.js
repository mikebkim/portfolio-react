import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'

// Pages
import HomePage from './components/HomePage/HomePage'
import TechnologiesPage from './components/TechnologiesPage/TechnologiesPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ContactPage from './components/ContactPage/ContactPage'

// Components
import NavBar from './components/NavBar/NavBar'

// Images
import MK_Resume from "./files/MK_Resume.pdf"

// Icons
import home from "./icons/01_home.png"
import technologies from "./icons/02_technologies.png"
import projects from "./icons/03_projects.png"
import contact from "./icons/04_contact.png"

function importAll(r) {
  let images = {}
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item) })
  return images
}
const allImages = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar
            iconHome={home}
            iconTechnologies={technologies}
            iconProjects={projects}
            iconContact={contact}
          />
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route exact path='/home' element={<HomePage resume={MK_Resume} />} />
            <Route exact path='/technologies' element={<TechnologiesPage allImages={allImages} />} />
            <Route exact path='/projects' element={<ProjectsPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
          </Routes>
        </Router>
      </div>
    )
  }
}


export default App