import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Styled_NavBar from "./Styled_NavBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faLayerGroup, faPhone } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

const NavBar = () => {

    // const navData = [
    //     {
    //         title: "HOME",
    //         linkTo: "/home",
    //         icon: faHome
    //     },
    //     {
    //         title: "TECHNOLOGIES",
    //         linkTo: "/technologies",
    //         icon: faCode
    //     },
    //     {
    //         title: "PROJECTS",
    //         linkTo: "/projects",
    //         icon: faLayerGroup
    //     },
    //     {
    //         title: "CONTACT",
    //         linkTo: "/contact",
    //         icon: faPhone
    //     },
    // ]

    const [selectedTab, setSelectedTab] = useState('')
    // const [navItems, setNavItems] = useState(navData)
    const location = useLocation()

    useEffect(() => {
        setSelectedTab(JSON.stringify(location))
    }, [location])

    useEffect(() => {
        AOS.init()
    }, [])


    // const moveItemToFront = (index) => {
    //     const selectedItem = navItems[index]
    //     const newOrder = [selectedItem, ...navItems.slice(0, index), ...navItems.slice(index + 1)]
    //     setNavItems(newOrder)
    // }

    return (
        <Styled_NavBar>
            <div className="NavBar">
                {/* {navItems.map((item, index) => {
                    return <Link
                        onClick={() => moveItemToFront(index)}
                        to={`${item.linkTo}`}
                        className={selectedTab.includes(item.title.toLocaleLowerCase()) ? "selected-right" : "nav-link"}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <div
                            className="nav-line-selected-right"
                        >
                            {selectedTab.includes(item.title.toLocaleLowerCase()) ? item.title : ""}
                        </div>
                    </Link>
                })} */}
                <Link to="/home" className={selectedTab.includes("home") ? "selected-right" : "nav-link"}><FontAwesomeIcon icon={faHome} />
                    <div className="nav-line-selected-right">{selectedTab.includes("home") ? "HOME" : ""}</div>
                </Link>
                <Link to="/technologies" className={selectedTab.includes("technologies") ? "selected-right" : "nav-link"}><FontAwesomeIcon icon={faCode} />
                    <div className="nav-line-selected-right">{selectedTab.includes("technologies") ? "TECHNOLOGIES" : ""}</div>
                </Link>
                <Link to="/projects" className={selectedTab.includes("projects") ? "selected" : "nav-link"}><FontAwesomeIcon icon={faLayerGroup} />
                    <div className="nav-line-selected">{selectedTab.includes("projects") ? "PROJECTS" : ""}</div>
                </Link>
                <Link to="/contact" className={selectedTab.includes("contact") ? "selected" : "nav-link"}><FontAwesomeIcon icon={faPhone} />
                    <div className="nav-line-selected">{selectedTab.includes("contact") ? "CONTACT" : ""}</div>
                </Link>
            </div>
        </Styled_NavBar>
    )
}

export default NavBar