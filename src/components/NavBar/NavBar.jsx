import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Styled_NavBar from "./Styled_NavBar"

const NavBar = (props) => {

    const [selectedTab, setSelectedTab] = useState('')

    const location = useLocation()

    useEffect(() => {
        setSelectedTab(JSON.stringify(location))
    }, [location])

    return (
        <Styled_NavBar>
            <div className="NavBar">
                <Link to="/home" className={selectedTab.includes("home") ? "selected" : "nav-link"}>Home</Link>
                <Link to="/technologies" className={selectedTab.includes("technologies") ? "selected" : "nav-link"}>Technologies</Link>
                <Link to="/projects" className={selectedTab.includes("projects") ? "selected" : "nav-link"}>Projects</Link>
            </div>
        </Styled_NavBar>
    )
}

export default NavBar