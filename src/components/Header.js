import NavBar from '../components/NavBar';
import { motion } from "framer-motion";

function Header() {
    const name ={
        hidden: {
            opacity:1,
            scale:.1,
            y:'-100vh'
        },
        visable:{
            scale:2.5,
            y:'250%',
            x:'-10%',
            opacity:0.1,
            textShadow:'0px 0px 8px grey', 
            transition:{
                type:'spring', 
                stiffness:80,
                mass: .6,
                damping:3.7,

            }        
        }
    }
    return (
    <>
        <NavBar />
        <motion.svg 
            variants={name}
            initial='hidden'
            animate="visable"
            xmlns="http://www.w3.org/2000/svg"
            width='145px'
            height='120px'>
                <text id="علي" transform="translate(46 90)" fill="rgb(128, 128, 128)" font-size="100" font-family="Farah"><tspan x="0" y="0">علي</tspan></text>
        </motion.svg>

</>
    );
};

export default Header
