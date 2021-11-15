import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import logoState from '../local_storage/logoState';
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import { ProjectsData } from '../data/ProjectsData';



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
                        initial={{ scale: 0, opacity: 0, y: '-100vh' }}
                        animate={{ scale: [0, 0.5, 0.5, 0.5, 1], opacity: 1, y: 0 }}
                        transition={{ type: 'tween', duration: 0.6 }}
                        exit={{ scale: [1, 0.5, 0.5, 0.5, 0.0], opacity: 0, y: ['-50vh', '50vh'], transition: { duration: 0.5 } }}>

                        {ProjectsData.map((project, index) => {
                            return (
                                <section key={index} className={project.section_Cname}>
                                    <div className="project-container">

                                        <div className="project-info">
                                            <h2>{project.title}</h2>
                                        </div>

                                        <div className="project-image">
                                            <img src={project.image} alt="project mockup" />
                                            <p className="project-tools">{project.tools}</p>
                                        </div>

                                        <div className='links-container'>
                                            <p>{project.overview}</p>

                                            <a className='project-links' href={project.github_link} target="_blank" rel="noopener noreferrer">
                                                <FaIcons.FaGithub className="social-icon" />
                                            </a>
                                            {project.site_link !== null &&
                                                <a className='project-links' href={project.site_link} target="_blank" rel="noopener noreferrer">
                                                    <RiIcons.RiComputerLine className='comp-icon social-icon' />
                                                </a>
                                            }
                                            {project.caseStudy_link !== null &&
                                                <Link className='project-links' to={project.caseStudy_link}>
                                                    <div >
                                                        <BiIcons.BiDetail className='comp-icon social-icon' />
                                                    View Details
                                                </div>
                                                </Link>
                                            }

                                        </div>
                                    </div>
                                </section>

                            )
                        })
                        }
                    </motion.section>


                </section>

                : toggleVisabitly())}

        </>
    )
}


export default PageWork


