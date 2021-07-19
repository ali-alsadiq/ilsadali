import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import LazyLoad from 'react-lazyload';
import logoState from '../local_storage/logoState';
import * as FaIcons from "react-icons/fa";
import portfolioMockup from '../images/portfolioMockup.jpg'
import * as RiIcons from "react-icons/ri";

const projectsContainer ={
    hidden:{
        scale:0, 
        opacity:0, 
        x:'-100vw',
        y:'-80vh',
    },
    visable:{ 
        scale:1, 
        opacity:1 , 
        x:0,
        y:0,
        transition:{
            type: 'tween', 
            duration: 2
        }
    },
}
const projectDiv = {
    hidden: {
        x:'-100vh',
        scale:0.2,
    },
    visable:{
        y:0,
        opacity:1, 
        scale:[0.2,0.25,0.26,0.27,0.3,0.35,0.4,0.45,1],
        transition:{
            duration:0.5,
            type:'spring', 
            ease:"easeInOut",
        } 
    },
    exit:{
        y:'-100vh',
        scale:[1,0.2,0.19,0.18,0.17,0.16],
        height:1,
        opacity:[0.9,0.5,0],
        transition:{
            type:'tween', 
            duration:1,
            ease:"easeInOut"
        }
    }
}
const firstLine ={
    initial:{
        opacity:1,
    },
    twisted:{
        opacity:1,
        scale:1.5,
        originZ:0,
        rotateZ:-45,
        transition:{
            type:'spring',
            ease:"easeInOut"

        }
    }
}
const secondLnie ={
    hidden:{
        opacity:0.2,
        scale:0.2,
    },
    visable:{
        opacity:1,
        scale:1.5,
        originZ:0,
        rotateZ:45,
        transition:{
            type:'spring',
        }
    }
}  
const arrow ={
    initial:{
        opacity:1,
        y:0,
        x:0,
        scale:1,
        transition:{
            duration:.7,
        }
    },
    hidden:{
        scale:5,
        opacity:[1,0.5,0.3,0],
        transition:{
            duration:.7,
        }
    }
}
const icon ={
    hidden:{
        opacity:0.7,
        scale:3,
        y:"-20vh",
        x:'200vw',
    },
    visable:{
        opacity:1,
        color:'rgb(222, 108, 245)',
        x:0,
        y:0,
        scale:1.8,
        transition:{
            type:'spring',
            stiffness:30,
            mass:  0.25,
            damping:1
        }
    },
    hover:{
        color:'rgb(144, 97, 252)',        
        scale:4.8,

    }
}


function PageWork() {
    useEffect(() => {
        document.title = 'ilsadali | Work';
    },[]);

    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isMovienaOpen, setIsMovienaOpen] = useState(false);
    const [isCapstoneOpen, setIsCapstoneOpen] = useState(false);


    function toggleCapstone(){
        setIsMovienaOpen(false);
        setIsPortfolioOpen(false);
        setIsCapstoneOpen(!isCapstoneOpen);

    }
    function toggleMoviena(){
        setIsCapstoneOpen(false);
        setIsPortfolioOpen(false);
        setIsMovienaOpen(!isMovienaOpen);
    }
    function togglePortfolio(){
        setIsCapstoneOpen(false);
        setIsMovienaOpen(false);
        setIsPortfolioOpen(!isPortfolioOpen);
    }

    const logoStateAndActions = logoState();
    const logoLocalState = logoStateAndActions[0];
    const logoLocalActions = logoStateAndActions[1];

    function toggleVisabitly(){
        setTimeout(function(){logoLocalActions.changeVisabilty('true')}, 3500);
    }

    return (
        <>
            {(logoLocalState.visable ==='true' ?

            <motion.section
                variants={projectsContainer}
                initial='hidden'
                animate='visable'
                transition={{ type: 'tween', duration: 1}}
                exit={{ scale:0.0, opacity:0,x:'100vw',  y:'-80vh', transition:{ ease: 'easeInOut', duration: 1}  }}>

                <motion.section className="project-section portfolio-section">

                    <motion.div  
                        className="project-container" 
                        onClick={togglePortfolio}>

                        <img className="portfolio-image" src={portfolioMockup} alt="img"/>
                        <span>Personal Portfolio</span><br/>
                       
                        <motion.svg 
                            variants={icon}
                            className="icon arrow" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"></circle>
                            <motion.polyline
                                variants={arrow}
                                initial="initial"
                                animate={isPortfolioOpen ? 'hidden' : 'initial'}
                            points="8 12 12 16 16 12">
                            </motion.polyline>
                            <motion.line
                                variants={firstLine}
                                initial="inital"
                                animate={isPortfolioOpen ? 'twisted' : 'initial'}
                                x1="12" y1="8" x2="12" y2="16">
                            </motion.line>
                            <motion.line className='second-line'
                                variants={secondLnie}
                                initial="visable"
                                animate={isPortfolioOpen ? 'visable' : 'hidden'}
                                x1="12" y1="8" x2="12" y2="16">
                            </motion.line>
                        </motion.svg>
                    </motion.div>

                    <motion.div 
                        variants={projectDiv} 
                        animate={isPortfolioOpen ? 'visable' : 'exit'}                    
                            className={isPortfolioOpen ? 'project' : 'project-hide'}>  
                            <h3>Project Links</h3> 
                             
                            <a className='project-links' href="https://github.com/ali-alsadiq/ilsadali" target="_blank" rel="noopener noreferrer">
                                <div>
                                    <FaIcons.FaGithub className="social-icon"/>Code       
                                </div>
                            </a>      
                           
                            <Link className='project-links' to='/'> 
                                <div >
                                    <RiIcons.RiComputerLine className='comp-icon social-icon'/>Live Site
                                </div>
                            </Link>
                         
                            <p className="project-info">I chose React to develop this project, to move between pages without reloading the page.
                            <br></br>Utilizing Framer Motion library to animate components in and out. </p>
                           <section className="design">
                                <h3>Design</h3>
                                    <div className='site-colors'>
                                        <span>Background</span>
                                        <div className='background-color'>
                                        </div>    
                                        <span>Logo</span>
                                        <div className='logo-color'>
                                        </div>    
                                        <span>Initial Links</span>
                                        <div className='initial-links-color'>
                                        </div>
                                        <span>Active Links</span>
                                        <div className='active-links-color'>
                                        </div>        
                                    </div>
                                    <div className="mockups-div">
                                        <LazyLoad className='mobile-mockup-container'>
                                            <iframe className='mobile-mockup' loading="lazy" title="portfolioMobile" width="375" height="812" src="https://xd.adobe.com/embed/22d4a695-0cbf-41b7-82f6-90c6e526260e-7787/" frameBorder="0" allowFullScreen></iframe>
                                        </LazyLoad>
                                        <br/>
                                        <LazyLoad className='desktop-mockup-container'>
                                            <iframe className='desktop-mockup' loading="lazy" title="portfolioDesktop" width="960" height="540" src="https://xd.adobe.com/embed/150094a1-460b-4a1f-841c-a9e74534dda2-4053/" frameBorder="0" allowFullScreen></iframe>
                                        </LazyLoad>
                                    </div>
                           </section>
                            
                            <section className="development">
                                <h3>Development</h3>
                                <LazyLoad className='arrow-code'>
                                    <iframe height="350" style={{width:'80%'}} scrolling="no" title="arrow-icon" src="https://codepen.io/ali-alsadiq/embed/preview/RwVoEJX?default-tab=js&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen={true}>
                                        See the Pen <a href="https://codepen.io/ali-alsadiq/pen/RwVoEJX" target="_blank" rel="noopener noreferrer">
                                        </a> by Ali (<a href="https://codepen.io/ali-alsadiq" target="_blank" rel="noopener noreferrer">@ali-alsadiq</a>)
                                        on <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">CodePen</a>.
                                    </iframe>
                                </LazyLoad>
                               
                            </section>
                            
                    </motion.div>


                </motion.section>

                <motion.section className="project-section moviena-section">
                    <motion.div className="project-container" onClick={toggleMoviena}>

                        <img className="portfolio-image" src={portfolioMockup} alt="img"/>
                        <span>Moviena</span><br/>
                        
                        <motion.svg 
                            variants={icon}
                            initial="hidden"
                            animate="visable"
                            className="icon arrow" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"></circle>
                            <motion.polyline
                                variants={arrow}
                                initial="initial"
                                animate={isMovienaOpen ? 'hidden' : 'initial'}
                            points="8 12 12 16 16 12">
                            </motion.polyline>

                            <motion.line
                                variants={firstLine}
                                initial="inital"
                                animate={isMovienaOpen ? 'twisted' : 'initial'}
                                x1="12" y1="8" x2="12" y2="16">
                            </motion.line>
                            <motion.line className='second-line'
                                variants={secondLnie}
                                initial="visable"
                                animate={isMovienaOpen ? 'visable' : 'hidden'}
                                x1="12" y1="8" x2="12" y2="16">
                            </motion.line>
                        </motion.svg>

                    </motion.div>

                    <motion.div className={isMovienaOpen ? 'project' : 'project-hide'}
                        variants={projectDiv} 
                        animate={isMovienaOpen ? 'visable' : 'exit'}>                  
                        <p className="project-info">Dynamic website built in React utalizing tmdb.org API</p>
                        
                        <a className='project-links' href="https://github.com/ali-alsadiq/moviena/" target="_blank" rel="noopener noreferrer">
                            <div > 
                                <FaIcons.FaGithub className="social-icon"/>Code         
                            </div>
                        </a>    
                        <Link className='project-links' to='https://ilsadali.com/moviena/' target="_blank" rel="noopener noreferrer">
                            <div >
                                 <RiIcons.RiComputerLine className='comp-icon social-icon'/>Live Site
                            </div>
                        </Link>

                        <h3>Mockups</h3>
                        <div className="mockups-div moviena">
                            <LazyLoad className='mobile-mockup-container'>
                                <iframe className='mobile-mockup' loading="lazy" title="movienaioMobile" width="375" height="812" src="https://xd.adobe.com/embed/362f6677-bae0-47e3-a521-7880da21825a-637c/" frameBorder="0" allowFullScreen></iframe>
                            </LazyLoad>
                            <br/>
                            <LazyLoad className='desktop-mockup-container  desktop-moviena'>
                                <iframe className='desktop-mockup' loading="lazy" title="movienaDesktop" width="960"  height="740" src="https://xd.adobe.com/embed/e7fa7621-e1f3-443f-bd0d-88990f782389-b2a9/" frameBorder="0" allowFullScreen></iframe>
                            </LazyLoad>
                        </div>
                    </motion.div>
                
                </motion.section>
               
                
              
                <motion.section className="project-section capstone-section">
                    <motion.div className="project-container" 
                        onClick={toggleCapstone}>
                        <img className="portfolio-image" src={portfolioMockup} alt="img"/>
                        <span>Capstone Project</span><br/>
                        <motion.svg 
                            variants={icon}
                            initial="hidden"
                            animate="visable"
                            className="icon arrow" stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"></circle>
                            <motion.polyline
                                variants={arrow}
                                initial="initial"
                                animate={isCapstoneOpen ? 'hidden' : 'initial'}
                            points="8 12 12 16 16 12">
                            </motion.polyline>
                            <motion.line
                                variants={firstLine}
                                initial="inital"
                                animate={isCapstoneOpen ? 'twisted' : 'initial'}
                                x1="12" y1="8" x2="12" y2="16">
                            </motion.line>
                            <motion.line className='second-line'
                                variants={secondLnie}
                                initial="visable"
                                animate={isCapstoneOpen ? 'visable' : 'hidden'}
                                x1="12" y1="8" x2="12" y2="16">
                            </motion.line>
                        </motion.svg>
                    </motion.div>
                
                    <motion.div className={isCapstoneOpen ? 'project' : 'project-hide'}
                        variants={projectDiv} 
                        animate={isCapstoneOpen ? 'visable' : 'exit'}>                  
                        <p className="project-info">Worked in a team of 4 to design and develop a multipage E-commerse site in WordPress.</p>
                        
                        <a className='project-links' href="https://github.com/htpwebdesign/simple-pleasures" target="_blank" rel="noopener noreferrer">
                            <div > 
                                <FaIcons.FaGithub className="social-icon"/>Code
                            </div>
                        </a>             
                        
                           
            
                        <Link className='project-links' to='https://simplepreasures.bcitwebdeveloper.ca/' target="_blank" rel="noopener noreferrer"> 
                            <div  >
                                <RiIcons.RiComputerLine className='comp-icon social-icon'/>
                                Live Site 
                            </div>
                       </Link>

                        <h3>Wireframes</h3>
                    </motion.div>
                </motion.section>
                
               

            </motion.section>
            :toggleVisabitly() )}

        </>
    )
}


export default PageWork


