import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import portfolio from '../images/portfolioMockup.jpg'

const projectDiv = {
    hidden: {
        opacity:0.3,
        scale:2.2,
    },
    visable:{
        y:0,
        opacity:1, 
        scale:1,
        transition:{
            duration:0.5,
            type:'tween', 
            ease:"easeInOut"
        } 
    },
    exit:{
        y:'-100vh',
        scale:[1,0.2],
        height:0.2,
        opacity:0,
        transition:{
            duration:0.8,
            ease:"easeInOut"
        }
    }
}    

function PageWork() {


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

    return (
        <>
        
            <motion.section
                initial={{ x: '-100vw'}}
                animate={{ x:0 }}
                transition={{ type: 'spring', stiffness: 90, duration: 0.3}}
                exit={{ x:'-100vw', transition:{ ease: 'easeInOut'} }}>

                <h1>Page Work...</h1>

                <motion.div  
                    variants={projectDiv} 
                    initial='hidden'
                    animate='visable' 
                    className="project-container" 
                    onClick={togglePortfolio}>
                    <span>Personal Portfolio</span>
                    <img className="portfolio-image" src={portfolio} alt="img"/>
                </motion.div>
               
                
                <motion.div 
                    variants={projectDiv} 
                    initial='hidden' 
                    animate={isPortfolioOpen ? 'visable' : 'exit'}                    
                        className={isPortfolioOpen ? 'project' : 'project-hide'}>                  
                        <p className="project-info">I chose React to develop this project, because it brings me pleasure.
                        <br></br>Insparation: midnight sky</p>
                        <Link to='/'>Live Site</Link><br/>
                        <a href='https://github.com/ali-alsadiq'>Github</a>
                        <h3>Mockups</h3>
                        <iframe title="portfolioMobile" width="375" height="812" src="https://xd.adobe.com/embed/22d4a695-0cbf-41b7-82f6-90c6e526260e-7787/" frameBorder="0" allowFullScreen></iframe>
                        <br/>
                        {/* <iframe title="portfolioDesktop" width="960"xw height="540" src="https://xd.adobe.com/embed/150094a1-460b-4a1f-841c-a9e74534dda2-4053/" frameBorder="0" allowFullScreen></iframe> */}
                </motion.div>

                <motion.div  
                    variants={projectDiv} 
                    initial='hidden'
                    animate='visable' 
                    className="project-container" 
                    onClick={toggleMoviena}>
                    <span>Moviena</span>
                    <img src="/images/photo.jpg" alt=""/>
                </motion.div>

                <motion.div 
                    variants={projectDiv} 
                    initial='hidden' 
                    animate={isMovienaOpen ? 'visable' : 'exit'}                    
                    className={isMovienaOpen ? 'project' : 'project-hide'}>                  
                    <p className="project-info">Dynamic website built in React utalizing tmdb.org API</p>
                    <a href="https://github.com/ali-alsadiq/moviena/">GitHub</a><br/>
                    <a href="https://ilsadali.com/moviena/">Live Site</a>
                    <h3>Mockups</h3>
                    <iframe title="movienaioMobile" width="375" height="812" src="https://xd.adobe.com/embed/362f6677-bae0-47e3-a521-7880da21825a-637c/" frameBorder="0" allowFullScreen></iframe>
                    <br/>
                    {/* <iframe title="movienaDesktop" width="960"  height="740" src="https://xd.adobe.com/embed/e7fa7621-e1f3-443f-bd0d-88990f782389-b2a9/" frameBorder="0" allowFullScreen></iframe> */}
                </motion.div>
                
                <motion.div  
                    variants={projectDiv} 
                    initial='hidden'
                    animate='visable' 
                    className="project-container" 
                    onClick={toggleCapstone}>
                    <span>Capstone Project</span>
                </motion.div>
               
                <motion.div 
                    variants={projectDiv} 
                    initial='hidden' 
                    animate={isCapstoneOpen ? 'visable' : 'exit'}                  
                    className={isCapstoneOpen ? 'project' : 'project-hide'}>                  
                    <p className="project-info">Worked in a team of 4 to design and develop a multipage E-commerse site in WordPress.</p>
                    <a href="https://github.com/htpwebdesign/simple-pleasures">GitHub</a><br/>
                    <a href="https://simplepreasures.bcitwebdeveloper.ca/">Live Site</a>
                    <h3>Wireframes</h3>
                </motion.div>

            </motion.section>

        </>
    )
}

export default PageWork
