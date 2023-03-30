import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Styled_NavBar from "./Styled_NavBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faLayerGroup, faPhone } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ iconHome, iconTechnologies, iconProjects, iconContact }) => {

    const [selectedTab, setSelectedTab] = useState('')

    const location = useLocation()

    useEffect(() => {
        setSelectedTab(JSON.stringify(location))
    }, [location])

    return (
        <Styled_NavBar>
            <div className="NavBar">
                <Link to="/home" className={selectedTab.includes("home") ? "selected" : "nav-link"}><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/technologies" className={selectedTab.includes("technologies") ? "selected" : "nav-link"}><FontAwesomeIcon icon={faCode} /></Link>
                <Link to="/projects" className={selectedTab.includes("projects") ? "selected" : "nav-link"}><FontAwesomeIcon icon={faLayerGroup} /></Link>
                <Link to="/contact" className={selectedTab.includes("contact") ? "selected" : "nav-link"}><FontAwesomeIcon icon={faPhone} /></Link>
            </div>
            <div className="nav-line"></div>
        </Styled_NavBar>
    )
}

export default NavBar