import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";

const line1 = "Hi, I’m Ali Alsadiq";
const line2 = "Front-End Web Developer";
const line3 = "Based in Vancouver, BC."

const sentence = {
    hidden: {opacity: 1},
    visable:{
        opacity:1,
        transition:{
            delayChildren: 0.8,
            staggerChildren: 0.025
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
    return (
        <>
            <motion.section
            initial={{ y: '-100vh'}}
            animate={{ y:0 }}
            transition={{ type: 'spring', stiffness: 90, duration: 0.3, delay:.3  }}
            exit={{ y:'100vh', transition:{ ease: 'easeInOut', duration: 0.3} }}>
            <h2>Page Home...</h2>

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

            <FaIcons.FaReact></FaIcons.FaReact>
            <FaIcons.FaHtml5></FaIcons.FaHtml5>
            <FaIcons.FaSass></FaIcons.FaSass>
            <DiIcons.DiJavascript1></DiIcons.DiJavascript1>
            <FaIcons.FaPhp></FaIcons.FaPhp>
            <FaIcons.FaWordpress></FaIcons.FaWordpress>
            <SiIcons.SiWoocommerce className="woo"></SiIcons.SiWoocommerce><br></br>
            <DiIcons.DiCss3></DiIcons.DiCss3>
            <FaIcons.FaLinkedinIn></FaIcons.FaLinkedinIn>
            <FaIcons.FaCodepen></FaIcons.FaCodepen>
            <FaIcons.FaGithub></FaIcons.FaGithub>
            <SiIcons.SiAdobeillustrator></SiIcons.SiAdobeillustrator>
            <SiIcons.SiAdobephotoshop></SiIcons.SiAdobephotoshop>
            <SiIcons.SiAdobexd></SiIcons.SiAdobexd>
            
            </motion.section>
        


        {/* </motion.section> */}
    </>
    )
}

export default PageHome
