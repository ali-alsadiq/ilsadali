import React, {useEffect} from 'react';
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import Octopus from '../components/Octopus'


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
            staggerChildren: 0.05
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

function PageHome() {
    useEffect(() => {
        document.title = 'ilsadali';
    });
    return (
        <>
        <motion.section
            initial={{ y: '-100vh'}}
            animate={{ y:0 }}
            transition={{ type: 'spring', stiffness: 90, duration: 0.3, delay:.3  }}
            exit={{ y:'100vh', transition:{ ease: 'easeInOut', duration: 0.3} }}>

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
            <section className='home-social'>
                <h4>Get in touch</h4>
                <a href="https://github.com/ali-alsadiq">
                    <FaIcons.FaGithub className="social-icon"></FaIcons.FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/ilsadali/">
                    <FaIcons.FaLinkedinIn className="social-icon"></FaIcons.FaLinkedinIn>
                </a>
                <a href='mailto:ali6254@gmail.com'><BiIcons.BiMailSend className='social-icon mail-icon'/></a>
            </section >
            
        </motion.section>
        
    </>
    )
}

export default PageHome
