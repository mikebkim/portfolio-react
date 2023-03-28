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

// Components
import NavBar from './components/NavBar/NavBar'

// Images
// import * from "./images"

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
          <div className='app-header'>
            <h1 className='main-header'>
            </h1>
          </div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/technologies' element={<TechnologiesPage allImages={allImages} />} />
            <Route exact path='/projects' element={<ProjectsPage />} />
          </Routes>
        </Router>
      </div>
    )
  }
}


export default App