import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";


const logo ={
    hidden: {
        y:'-50vh', 
        opacity:0,
        color:'black'
    },
    visable:{
        scale:1.6,
        y:0,
        opacity:[0.5,0.7],
        padding:'0.5rem', 
        textAlign: 'center',
        fill:'grey',
        transition:{
            type:'spring', 
            stiffness:80,
            mass: .6,
            damping:7
        }        
    },
    logoHover:{
        opacity:[0.6,1] , 
        rotateZ:[-1,1],
        scale:[1.5,1.6], 
        textShadow:'0px 0px 8px grey', 
        transition:{ 
            duration:1,
            yoyo:2
        }
    }
}
const logoPath = {
    hidden:{
        pathLength:0
    },
    visable:{
        opacity:1,
        pathLength:1,
        transition:{
            delay:.5,
            duration:2.3,
            ease: 'easeInOut'
        }
    }
}
const menuIcon = {
    hidden: {
        x:'50vh', 
        opacity:0,
        fill:"rgb(176, 136, 61)",
    },
    visable:{
        scale:1,
        x:0,
        opacity:.4,
        fill:'grey',
        transition:{
            type:'spring', 
            stiffness:120,
            mass: .6,
            damping:5
        }        
    },
    menuHover:{
        opacity:[0.3,0.6,0.3] , 
        fill:"rgb(115, 115, 255)",
        originZ:0,
        rotateZ:[0,-5,-10,-5,5,10,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        transition:{ 
            repeat: Infinity,
            duration: 1.2,
        }
    }
}
const top = {
    closed: {
     originX:0.5,
     originZ:0
    },
    opened: {
      rotateZ: -45,
     
    }
  }
  const center = {
    closed: {
        opacity:1,
        y:0,
    transition:{
        duration:0.4,
        ease: 'easeInOut',
        type: 'spring', 
        stiffness: 90
    }
  },
    opened: {
      opacity: 0,
      y:'-100vh',
        transition:{
            duration:3.4,
            ease: 'easeInOut'
        }
    }
}
  const bottom = {
    closed: {
        originX:0.5,
        originZ:0,
        y:0
    },
    opened: {
        y:12,
      rotateZ: 45,
  
    }
}
function NavBar() {

    // code modified from https://www.youtube.com/watch?v=CXa0f4-dWi4&ab_channel=BrianDesignBrianDesign
    const [sideBar, setSideBar]= useState(false);
    const [isOpen, setIsOpen] = useState(false);


    function showSideBar (){
        setSideBar(!sideBar);
        setIsOpen (!isOpen);

        let main= document.getElementById("main-body");
        main.classList.add(`${!sideBar}`);
        main.classList.remove(`${sideBar}`);
    }
    
    return (
        <>
            <div className ='navbar'>
                <NavLink to='/'>
                    <motion.svg className="logo"  
                        variants={logo}
                        initial='hidden'
                        animate='visable'
                        whileHover='logoHover' 
                        id="Layer_1" data-name="Layer 1" style={{ marginLeft:' 50px' }} width="80" height="28" viewBox="0 0 120.17 27.8"  fill='none' stroke='rgb(176, 136, 61)' stroke-miterlimit='10' stroke-width='0.09px'>
                        <motion.path variants={logoPath} className="cls-1" d="M1288.77,364.16a1.19,1.19,0,0,0-.87-1.58,1.27,1.27,0,0,0-.28,0h-1a3,3,0,0,1-1.63-.32,1.17,1.17,0,0,1-.46-1.05,1.23,1.23,0,0,1,.41-1.07,4.81,4.81,0,0,1,2.23-.3h5.42a2.56,2.56,0,0,1,1.41.27,2.4,2.4,0,0,1,.68,1l7.37,18.43a.24.24,0,0,0,.22.15h.17a2.46,2.46,0,0,1,1.4.28,1.19,1.19,0,0,1,.38,1,1.31,1.31,0,0,1-.36,1.07,2.2,2.2,0,0,1-1.35.3h-5.17a3.61,3.61,0,0,1-1.85-.3,1.23,1.23,0,0,1-.41-1.07,1.13,1.13,0,0,1,.45-1,3.41,3.41,0,0,1,1.68-.29h0a1.19,1.19,0,0,0,1.17-1.39.84.84,0,0,0-.08-.27l-.86-2.12a1.2,1.2,0,0,0-1.11-.74h-8a1.19,1.19,0,0,0-1.12.78l-.77,2.15a1.19,1.19,0,0,0,.87,1.57,1.27,1.27,0,0,0,.28,0h.11a3.36,3.36,0,0,1,1.71.3,1.09,1.09,0,0,1,.46,1,1.27,1.27,0,0,1-.41,1.08,3.58,3.58,0,0,1-1.79.29h-5c-.82,0-4.7,2.42-5,2.22s2.95-3.07,2.95-3.59a1.22,1.22,0,0,1,.4-1,2.89,2.89,0,0,1,1.54-.28h.21a.23.23,0,0,0,.21-.15Zm1.33,8.47h4.32a1.19,1.19,0,0,0,1.18-1.2,1.32,1.32,0,0,0-.08-.44l-2.27-5.58a1.18,1.18,0,0,0-1.55-.65,1.14,1.14,0,0,0-.66.68l-2,5.59a1.18,1.18,0,0,0,.71,1.52A1.14,1.14,0,0,0,1290.1,372.63Z" transform="translate(-1277.6 -356.83)"/>
                        <motion.path variants={logoPath} className="cls-1" d="M1312,379.24a3.15,3.15,0,0,1,1-2.43,3.78,3.78,0,0,1,2.69-.95,3.92,3.92,0,0,1,2.72.93,3.44,3.44,0,0,1,0,4.91,4.4,4.4,0,0,1-5.41,0A3.18,3.18,0,0,1,1312,379.24Z" transform="translate(-1277.6 -356.83)"/>
                        <motion.path variants={logoPath} className="cls-1" d="M1338.87,372.38a.24.24,0,0,0,.44,0l3.87-11.28a2,2,0,0,1,.73-1,2.39,2.39,0,0,1,1.34-.31h3.12a1.2,1.2,0,0,1,.92.33,1.34,1.34,0,0,1,.32,1,1.14,1.14,0,0,1-.39,1,2.69,2.69,0,0,1-1.44.28h-.06a.22.22,0,0,0-.23.23l.51,16.84a.23.23,0,0,0,.23.23h.21a3.41,3.41,0,0,1,1.66.27,1.16,1.16,0,0,1,.42,1,1.41,1.41,0,0,1-.34,1,1.34,1.34,0,0,1-1,.35h-5.34a2.59,2.59,0,0,1-1.51-.31,1.26,1.26,0,0,1-.4-1.06,1.11,1.11,0,0,1,.48-1,4,4,0,0,1,1.82-.28h.59a.23.23,0,0,0,.23-.24l-.36-14.83a.23.23,0,0,0-.45-.07l-3.35,9.72a2.36,2.36,0,0,1-.7,1.11,2.17,2.17,0,0,1-1.26.3,2,2,0,0,1-1.22-.32,2.22,2.22,0,0,1-.68-1.09l-3.4-9.72a.23.23,0,0,0-.45.07l-.31,14.84a.23.23,0,0,0,.23.23h1a2.93,2.93,0,0,1,1.58.31,1.1,1.1,0,0,1,.46,1,1.28,1.28,0,0,1-.4,1.07,2.71,2.71,0,0,1-1.52.3h-5.33a1.33,1.33,0,0,1-1-.34,1.43,1.43,0,0,1-.33-1,1.14,1.14,0,0,1,.42-1,3.25,3.25,0,0,1,1.65-.28h.2a.22.22,0,0,0,.23-.22l.54-16.84a.23.23,0,0,0-.23-.24h-.07a2.64,2.64,0,0,1-1.44-.28,1.14,1.14,0,0,1-.41-1,1.3,1.3,0,0,1,.33-1,1.23,1.23,0,0,1,.93-.33h3.12a2.48,2.48,0,0,1,1.34.31,1.79,1.79,0,0,1,.71,1Z" transform="translate(-1277.6 -356.83)"/>
                        <motion.path variants={logoPath} className="cls-1" d="M1358.7,379.24a3.14,3.14,0,0,1,1-2.43,3.8,3.8,0,0,1,2.69-.95,3.9,3.9,0,0,1,2.72.93,3.43,3.43,0,0,1,0,4.91,4.4,4.4,0,0,1-5.41,0A3.18,3.18,0,0,1,1358.7,379.24Z" transform="translate(-1277.6 -356.83)"/>
                        <motion.path variants={logoPath} className="cls-1" d="M1380.51,381.82a.23.23,0,0,0-.32.17,1.57,1.57,0,0,1-.39.89,1.48,1.48,0,0,1-1.09.34,1.45,1.45,0,0,1-1.18-.47,2.58,2.58,0,0,1-.45-1.51l-.25-4.41h0v-.33a1.94,1.94,0,0,1,.35-1.3,1.57,1.57,0,0,1,1.17-.38c.77,0,1.31.55,1.64,1.64a6.67,6.67,0,0,0,.44,1.23,4.56,4.56,0,0,0,2.1,2.06,7.55,7.55,0,0,0,3.43.72,6.44,6.44,0,0,0,4-1.16,3.58,3.58,0,0,0,1.53-3,3.19,3.19,0,0,0-.94-2.41,4.86,4.86,0,0,0-2.74-1.18l-2.82-.38a11.26,11.26,0,0,1-5.74-2.07,5.3,5.3,0,0,1-1.81-4.28,6.07,6.07,0,0,1,2.41-4.88,9.72,9.72,0,0,1,8.2-1.7,17.36,17.36,0,0,1,2.35.75.23.23,0,0,0,.31-.16.8.8,0,0,1,.27-.49,1.5,1.5,0,0,1,.91-.21,1.93,1.93,0,0,1,1.16.25c.17.13,3.16-2.1,4.37-2.67a.23.23,0,0,1,.3.31l-4,7.46a.2.2,0,0,0,0,.11v.13a1.37,1.37,0,0,1-.38,1,1.5,1.5,0,0,1-1.07.38c-.67,0-1.19-.47-1.55-1.4v0a5.17,5.17,0,0,0-.52-1.18v0a3.94,3.94,0,0,0-1.8-1.45,6.67,6.67,0,0,0-2.68-.52,5.85,5.85,0,0,0-3.74,1.14,3.67,3.67,0,0,0-1.43,3,2.75,2.75,0,0,0,1.07,2.28,6.86,6.86,0,0,0,3.28,1.14l3,.38a8.74,8.74,0,0,1,5,2,5.63,5.63,0,0,1,1.67,4.28,6.27,6.27,0,0,1-2.38,5.13,9.8,9.8,0,0,1-6.35,1.93,11.37,11.37,0,0,1-2.72-.33A15.91,15.91,0,0,1,1380.51,381.82Z" transform="translate(-1277.6 -356.83)"/>
                    </motion.svg>                                    
                </NavLink>

                <button className='menu-bars'>
                    <motion.svg
                        variants={menuIcon}
                        onClick={showSideBar}
                        initial='hidden'
                        animate='visable'
                        whileHover='menuHover'
                        width="40" height="60" viewBox="0 0 35.63 31.49"  fill='none' stroke='rgb(176, 136, 61)' stroke-width='2' stroke-miterlimit='10'>
                        <motion.rect variants={top} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="12.33" width="34.63" height="6.83" rx="3.42"/>
                        <motion.rect variants={center} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="24.16" width="34.63" height="6.83" rx="3.42"/>
                        <motion.rect variants={bottom} initial='closed' animate={isOpen ? "opened" : "closed"} className="cls-1" x="0.5" y="0.5" width="34.63" height="6.83" rx="3.42"/>
                    </motion.svg>
                </button>
            </div>
            
            <nav className={sideBar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    {SidebarData.map((item, index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <NavLink to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                    <a href="https://github.com/ali-alsadiq">
                        <FaIcons.FaGithub className="social-icon"></FaIcons.FaGithub>
                    </a>
                    <a href="https://www.linkedin.com/in/ilsadali/">
                        <FaIcons.FaLinkedinIn className="social-icon"></FaIcons.FaLinkedinIn>
                    </a>
                    {/* <a href="https://codepen.io/ali-alsadiq">
                        <FaIcons.FaCodepen className="social-icon"></FaIcons.FaCodepen>
                    </a> */}
                </ul>
            </nav>

        </>
    )
}

export default NavBar

