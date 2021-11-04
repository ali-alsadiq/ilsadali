import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

const footer = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visable: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: 1,
            duration: 2
        }
    },
}
function Footer() {
    return (
        <motion.footer
            variants={footer}
            initial="hidden"
            animate="visable">

            {/* <a href='mailto:ali6254@gmail.com'>
                <div className="get-in-touch">
                    Say Hello
                    <BiIcons.BiMailSend className='mail-icon'/>
                </div>  
            </a> */}
            <div className="footer-icons">

                <a href="https://github.com/ali-alsadiq" target="_blank" rel="noopener noreferrer">
                    <FaIcons.FaGithub className="social-icon"></FaIcons.FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/ilsadali/" target="_blank" rel="noopener noreferrer">
                    <FaIcons.FaLinkedinIn className="social-icon"></FaIcons.FaLinkedinIn>
                </a>
                {/* <a href="https://codepen.io/ali-alsadiq">
                <FaIcons.FaCodepen className="social-icon"></FaIcons.FaCodepen>
            </a> */}
            </div>
            <p>Designed &amp; Developed by Ali Alsadiq</p>
        </motion.footer>
    )
}

export default Footer
