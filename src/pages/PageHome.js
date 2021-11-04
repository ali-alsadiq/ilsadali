import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
// import * as FaIcons from "react-icons/fa";
// import * as BiIcons from "react-icons/bi";
import logoState from '../local_storage/logoState';

const sentence = {
    hidden: { opacity: 1 },
    visable: {
        opacity: 1,
        y: '50hv',
        transition: {
            delayChildren: 1.,
            staggerChildren: 0.065
        }
    }
}

function PageHome() {
    useEffect(() => {
        document.title = 'Ali Alsadiq | Front-End Web Developer';
    });

    const logoStateAndActions = logoState();
    const logoLocalState = logoStateAndActions[0];
    const logoLocalActions = logoStateAndActions[1];
    const [isLogoVisable, setLogoVisability] = useState(`${logoLocalState.visable}`);

    function toggleVisabitly() {
        setTimeout(function () {
            logoLocalActions.changeVisabilty('true');
            setLogoVisability('true');
        }, 1000);
    }

    return (
        <>
            {(isLogoVisable === 'true' ?


                <motion.section
                    className='home-section'
                    initial={{ scale: 0, opacity: 0, x: '45vw' }}
                    animate={{ scale: [0, 0.3, 0.3, 0.3, 1], opacity: 1, x: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    exit={{ scale: [1, 0.3, 0.3, 0.3, 0.0], opacity: 0, x: '-45vw', transition: { duration: 0.5 } }}>

                    <motion.p
                        className="intro"
                        variants={sentence}
                        initial="hidden"
                        animate="visable">
                        <span className='line1'>Hi, I'm</span><br />
                        <span className='line2'>Ali Alsadiq</span>
                        <span className='line3'>Front-End Developer</span><br />
                        <span className='line4'>Based in Vancouver, BC</span><br />
                    </motion.p>

                    <div className="page-links">
                        <NavLink onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to="/about">
                            <div>About Me</div>
                        </NavLink>
                        <NavLink onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to="/work">
                            <div>My Projects</div>
                        </NavLink>
                    </div>

                </motion.section>
                : toggleVisabitly())}
        </>
    )
}

export default PageHome
