import React, { useEffect  } from 'react';
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import Octopus from '../components/Octopus';
import logoState from '../local_storage/logoState';

const line1 = "Hi, I’m Ali Alsadiq";
const line2 = "Front-End Web Developer";
const line3 = "Based in Vancouver, BC."

const sentence = {
    hidden: {opacity: 1},
    visable:{
        opacity:1,
        y:'50hv',
        transition:{
            delayChildren: 1.,
            staggerChildren: 0.055
        }
    }
}
const letter = {
    hidden: { opacity: 0, y: 50 },
    visable: {
        opacity:1,
        y:0,
    },
}
const social ={
    hidden:{
    scale:0, 
    opacity:0, 
    y:'-50vh'
    },
    visable:{ 
        scale:1, 
        opacity:1 , 
        y:0,
        transition:{
            type: 'tween',
            delay:1, 
            duration: 2
        }
    },
}



function PageHome() {
    useEffect(() => {
        document.title = 'ilsadali';
    });
    
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
            initial={{ scale:0, opacity:0, y:'-40vh'}}
            animate={{ scale:1, opacity:1 , y:0}}
            transition={{ type: 'tween', duration: 1 }}
            exit={{ scale:0.0, opacity:0,y:'-40vh',transition:{ ease: 'easeInOut', duration: 1}  }}>

            <motion.p
            className="intro"
            variants={sentence}
            initial="hidden"
            animate="visable">
                {line1.split("").map((char,index) => {
                    return(
                        <motion.span key={char+'_'+index} className="letter" variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}
                <br></br>
                {line2.split("").map((char, index) => {
                    return(
                        <motion.span key={char+'_'+index} className="letter" variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}
                <br></br>
                {line3.split("").map((char, index) => {
                    return(
                        <motion.span key={char+'_'+index} className="letter" variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}
                <br></br>
            </motion.p>
            <Octopus />
            <motion.section
             variants={social}
             initial="hidden"
             animate="visable"
             className='home-social'>
                <h4>Get in touch</h4>
                <a href="https://github.com/ali-alsadiq" target="_blank" rel="noopener noreferrer">
                    <FaIcons.FaGithub className="social-icon"></FaIcons.FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/ilsadali/" target="_blank" rel="noopener noreferrer">
                    <FaIcons.FaLinkedinIn className="social-icon"></FaIcons.FaLinkedinIn>
                </a>
                <a href='mailto:ali6254@gmail.com'><BiIcons.BiMailSend className='social-icon mail-icon'/></a>
            </motion.section >
            
        </motion.section>
       :toggleVisabitly() )}
    </>
    )
}

export default PageHome
