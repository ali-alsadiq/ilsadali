import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { motion } from "framer-motion";


const logo = {
    hidden: {
        color: 'black',
        x: '4vw',
        y: 20,
        scale: 1.6,
        opacity: 1,
    },
    visable: {
        transition: {
            delay: 1.5,
            duration: 1,
            type: 'tween',
        }
    },
    logoHover: {
        opacity: [1, 0.7, 1],
        scale: [1.6, 1.63, 1.6],
        transition: {
            duration: 1.3,
            repeat: Infinity,
        }
    }
}
const logoPath = {
    hidden: {
        pathLength: 0
    },
    visable: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: .3,
            duration: 1.3,
            ease: 'easeIn'
        }
    },
    visableDelayed: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 1.3,
            duration: .5,
            ease: 'easeIn'
        }
    }
}
const menuIcon = {
    hidden: {
        x: '50vh',
        opacity: 0,
    },
    visable: {
        scale: 1,
        x: 0,
        opacity: 1,
        transition: {
            delay: 1.5,
            type: 'spring',
            stiffness: 50,
            mass: .6,
            damping: 5
        }
    },
    menuHover: {
        opacity: [0.8, 0.9, 1, 0.9, 0.8],
        originZ: 0,
        rotateZ: [0, -5, -10, -5, 5, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        transition: {
            repeat: Infinity,
            duration: 1.2,
        }
    }
}
const top = {
    closed: {
        originX: 0.5,
        originZ: 0
    },
    opened: {
        rotateZ: -45,

    }
}
const center = {
    closed: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 90
        }
    },
    opened: {
        opacity: 0,
        y: '-100vh',
        transition: {
            duration: 3.4,
            ease: 'easeInOut'
        }
    }
}
const bottom = {
    closed: {
        originX: 0.5,
        originZ: 0,
        y: 0
    },
    opened: {
        y: 12,
        rotateZ: 45,

    }
}
function NavBar() {

    const [sideBar, setSideBar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    function showSideBar() {
        setSideBar(!sideBar);
        setIsOpen(!isOpen);

        let main = document.getElementById("main-body");
        main.classList.add(`${!sideBar}`);
        main.classList.remove(`${sideBar}`);
    }
    return (
        <>
            <div className='navbar'>
                <NavLink className='logo-container' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to='/'>
                    <motion.svg className="logo"
                        variants={logo}
                        initial='hidden'
                        animate='visable'
                        whileHover='logoHover'
                        id="Layer_1" data-name="Layer 1" width="44" height="34" viewBox="0 0 238 190.18" stroke-miterlimit='10' stroke-width='0.09px'>
                        <motion.path variants={logoPath} initial='hidden' animate='visable' class="cls-1" d="M261.32,128.25a23.22,23.22,0,0,1-10,4.85c-2.76.63-5.6.43-7-.69-3.72-3.22-2.42-8.06-3.08-12.15a157.79,157.79,0,0,1,2-19.68c.22-.63.45-1.27.66-1.91,1.12-4,3-8,3-11.91-1.16-1.86-6.77-.81-9.89,0-2.45.64-5.35,1.68-6.53,3.17a5.54,5.54,0,0,0-1.07,2.55c-.19,1-.33,1.92-.45,2.87-5.06,14.39-14.5,34.4-23,50.15-3,5.6-8.89,14.64-12.6,18.41a8.74,8.74,0,0,1-2.23-1.6c-4.58-10.36-4.85-21.87-3.69-33.4a112.44,112.44,0,0,1,2.35-13.83c4.9-8.16,32.65-101.15,35.61-109.3,1.06-2.14-11.46.4-15.06,2.34C207,10,179.61,94.62,178.75,96.9a86.58,86.58,0,0,0-2.87,8.28c-1.29,4.19-2.46,8.38-3.45,12.57-2.64,4.49-5.46,9-8.61,13.45-7.09,9.21-15.22,19.82-23.17,25.54-1.18-5.2-2.41-10.38-3.33-15.64-1-7.57-2-15.16-2.93-22.76.1.1.19.21.29.32.88,1,1.13,1.75.78,0a2,2,0,0,0-1.25-1.76c-1.13-9.27-2.24-18.55-3.4-27.81a268.87,268.87,0,0,1,.3-42.92c.2-4.1.46-8.2.64-12.28-.09-2.53,1.27-5.68-1.64-7.39-3.83-1.64-14.48.94-17.07,3.94-3.4,7.49-6.07,15-9.23,22.45-8.08,17.33-15.34,34.66-22.78,52C75,119,68.24,133.19,62.47,147.34a30.73,30.73,0,0,1-4.09,1c-3.47.64-4-3.43-5.11-6.16-.76-3.47-2-6.91-1.53-10.61l-.13,0a2.17,2.17,0,0,0,0-.26,3.77,3.77,0,0,0-2.78.69A13.7,13.7,0,0,0,47,136.71a32.13,32.13,0,0,0-1.16,10.5c-.35,3.54,2.25,5.27,8.73,4.66a58.12,58.12,0,0,0,6.49-1.05c-.36,3.54-14.86,30.86-19.75,29.61-7.22-1.85-5-27.35-6.16-27.35-1.4,0-7.77,38.41,1.39,41.83,5.46,2,17.35-8.07,43.41-51,2.45-1.22,4.82-2.5,7.09-3.79,10.11-5.37,19.43-11.37,29.79-16.58.52,4,1,8,1.51,12a149,149,0,0,0,3.39,20c.45,1.91.86,3.83,1.3,5.74a3.48,3.48,0,0,0,2.9,3.06c2.94.79,7,.22,10.59-.39a46.1,46.1,0,0,0,21.67-9.65,114.43,114.43,0,0,0,10.92-10.7,70.06,70.06,0,0,0,1,11.43c.55,2.86,1.32,5.68,2.11,8.49.55,3.68,4.27,6.81,10.9,7.13,7.2.1,16-1.49,22.18-5.07,4.73-2.72,7.18-6.2,9.74-9.45,6.68-9.34,11.16-18.79,16.07-28.19l.8-1.7c1,2.93,2,5.94,5.32,8,5.57,3.11,17.91.46,23.91-3.92a49,49,0,0,0,8.59-9.16A93.65,93.65,0,0,1,261.32,128.25ZM82.81,137.54c4.48-10.08,8.87-20.16,13.39-30.24q8-18.75,16.13-37.52c-.24,17.53,2,34.63,4.23,51.72C104.62,126.14,93.66,131.85,82.81,137.54Z" transform="translate(-31.69 -4.97)" />
                        <motion.path variants={logoPath} initial='hidden' animate='visableDelayed' class="cls-1" d="M255.87,67.33a20.89,20.89,0,0,0-9.13,2.74c2.81-1,6.76-2.63,9.07-1.45.26,1-1.24,2.24-2.1,3.29-1.68,2.11-6.44,3.63-9.15,4.36l-.48.12h0c-2.22-.78-4-2.11-4.16-3.78-.5-1.65,2.1-3.26,4.46-4.5a37.58,37.58,0,0,1,15-3.74c-5.92-.44-12.88,1.23-18.54,3.71-3.7,1.61-7.44,3.89-7,6.33s3.69,5.17,9,4.08c4.73-1,9.77-2.69,13.33-5.06,2-1.59,3.3-3.54,3.27-5.21C259.13,67.33,257.29,67.3,255.87,67.33Z" transform="translate(-31.69 -4.97)" />
                    </motion.svg>
                </NavLink>

                <button className='menu-bars'>
                    <motion.svg
                        variants={menuIcon}
                        onClick={showSideBar}
                        initial='hidden'
                        animate='visable'
                        whileHover='menuHover'
                        width="40" height="60" viewBox="0 0 35.63 31.49" stroke-width='2' stroke-miterlimit='10'>
                        <motion.rect variants={top} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="12.33" width="34.63" height="6.83" rx="3.42" />
                        <motion.rect variants={center} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="24.16" width="34.63" height="6.83" rx="3.42" />
                        <motion.rect variants={bottom} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="0.5" width="34.63" height="6.83" rx="3.42" />
                    </motion.svg>
                </button>
            </div>

            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                {item.title !== 'Contact' ?
                                    <NavLink onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to={item.path}>
                                        <span>{item.icon} &nbsp;&nbsp; {item.title}</span>
                                    </NavLink>
                                    :
                                    <a href={item.path} target="_blank" rel="noopener noreferrer">
                                        <span>{item.icon}  &nbsp;&nbsp; {item.title}</span>
                                    </a>
                                }
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className={sideBar ? "nav-background" : "nav-background-hidden"}
                onClick={showSideBar}>

            </div>

        </>
    )
}

export default NavBar

