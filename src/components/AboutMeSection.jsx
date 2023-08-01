import Lottie from "lottie-react";
import about from './../assets/animation/about.json'
import { motion } from "framer-motion"
import Heading from "./Heading";

const AboutMeSection = ({sectionId}) => {
    return (
        <section className="my-container mx-auto mb-28" id='aboutSection'>
            <Heading name={'Who Am I?'}/>
            <div className="flex flex-col md:flex-row">
            <motion.div initial={{x:-150,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"tween",duration:1}} className="basis-1/2 mb-8 md:mb-0">
                <Lottie animationData={about} loop={true} />
                </motion.div>
                <motion.div initial={{x:150,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"tween",duration:1}} className="basis-1/2 text-justify">
                    <p className="text-lg">Hello, I'm <span className="font-bold">Shourav Paul</span>, a dedicated MERN stack developer with a passion for creating innovative web applications.I graduated  in Computer Science Engineering from University of Science and Technology Chittagong and have been actively working in the web development field for 1.5+ years.During this time, I have honed my skills in <span className="font-bold ">Tailwind CSS, Bootstrap,Firebase, JavaScript, React, MongoDB, Express.js, and Node.js</span><br />I firmly believe that learning is a lifelong journey. I actively engage in workshops, online courses, and attend industry conferences to keep myself abreast of emerging technologies and best practices in MERN stack development. </p>
                    
                </motion.div>
            </div>

        </section>
    );
};

export default AboutMeSection;