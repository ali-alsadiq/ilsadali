import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import logoState from '../local_storage/logoState';
import * as FaIcons from "react-icons/fa";
import portfolio from '../images/portfolioMockup.png'
import simplePleasures from '../images/ss.png'
import moviena from '../images/moviena.png'
import * as RiIcons from "react-icons/ri";



function PageWork() {
    useEffect(() => {
        document.title = 'Ali Alsadiq | Work';
    }, []);

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
                <section className='page-section'>

                    <motion.section className="projects-page"
                        initial={{ scale: 0, opacity: 0, x: '45vw' }}
                        animate={{ scale: [0, 0.3, 0.3, 0.3, 1], opacity: 1, x: 0 }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        exit={{ scale: [1, 0.3, 0.3, 0.3, 0.0], opacity: 0, x: '-45vw', transition: { duration: 0.5 } }}>


                        <h2 className="projects-heading">
                            Featured Projects
                        </h2>
                        <motion.section className="project-section portfolio-section">

                            <motion.div
                                className="project-container">
                                <div className="project-info">
                                    <h2>Portfolio</h2>
                                </div>
                                <div>
                                    <img className="project-image" src={portfolio} alt="portfolio" />
                                    <p className='project-tools'>React | SASS | XD | Illustrator | Photoshop</p>
                                </div>


                                <div className='links-container'>
                                    <a className='project-links' href="https://github.com/ali-alsadiq/ilsadali" target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <FaIcons.FaGithub className="social-icon" />
                                            View Code
                                        </div>
                                    </a>

                                    {/* <Link className='project-links' to='/'>
                                        <div >
                                            <RiIcons.RiComputerLine className='comp-icon social-icon' />
                                            Live Site
                                        </div>
                                    </Link> */}
                                </div>

                            </motion.div>


                        </motion.section>

                        <motion.section className="project-section moviena-section">
                            <motion.div className="project-container">

                                <div className="project-info">
                                    <h2>Moviena</h2>
                                </div>
                                <div>
                                    <img src={moviena} alt="" />
                                    <p className='project-tools'>React | SASS | XD | Illustrator | Photoshop</p>
                                </div>
                                <div className='moviena-links links-container'>
                                    <a className='project-links' href="https://github.com/ali-alsadiq/moviena/" target="_blank" rel="noopener noreferrer">
                                        <div >
                                            <FaIcons.FaGithub className="social-icon" />
                                            View Code
                                        </div>
                                    </a>
                                    <a className='project-links' href='https://ilsadali.com/moviena/' target="_blank" rel="noopener noreferrer">
                                        <div >
                                            <RiIcons.RiComputerLine className='comp-icon social-icon' />
                                            Live Site
                                        </div>
                                    </a>
                                </div>

                            </motion.div>
                        </motion.section>

                        <motion.section className="project-section capstone-section">
                            <motion.div className="project-container">
                                <div className='project-info'>
                                    <h2>Simple Pleasures</h2>
                                </div>
                                <div>
                                    <img src={simplePleasures} alt="" />
                                    <p className='project-tools'>WordPress | WooCommerce | XD | Illustrator | Photoshop</p>
                                </div>

                                <div className='links-container'>
                                    <a className='project-links' href="https://github.com/htpwebdesign/simple-pleasures" target="_blank" rel="noopener noreferrer">
                                        <div >
                                            <FaIcons.FaGithub className="social-icon" />
                                            View Code
                                        </div>
                                    </a>



                                    <a className='project-links' href='https://simplepreasures.bcitwebdeveloper.ca/' target="_blank" rel="noopener noreferrer">
                                        <div  >
                                            <RiIcons.RiComputerLine className='comp-icon social-icon' />
                                            Live Site
                                        </div>
                                    </a>
                                </div>

                            </motion.div>
                        </motion.section>

                    </motion.section>
                </section>

                : toggleVisabitly())}

        </>
    )
}


export default PageWork


