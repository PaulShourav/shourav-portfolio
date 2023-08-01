import { TypeAnimation } from 'react-type-animation';
import profile from '../../public/images/profile.png'
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import bootstrap from '../../public/icons/bootstrap.png'
import css from '../../public/icons/css.png'
import expressjs from '../../public/icons/expressjs.png'
import firebase from '../../public/icons/firebase.png'
import js from '../../public/icons/js.png'
import mongodb from '../../public/icons/mongodb.png'
import nodejs from '../../public/icons/nodejs.png'
import react from '../../public/icons/react.png'
import tailwindcss from '../../public/icons/tailwindcss.png'
import { motion } from "framer-motion"


const HomeSection = ({ sectionId }) => {
  return (
    <section className=' my-container mx-auto mb-24' id='home'>
      <div className='flex  flex-col-reverse lg:flex-row   min-h-screen  '>
        <motion.div initial={{ x: -150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "tween", duration: 1 }} className='basis-full md:basis-1/2 self-center text-center md:text-left'>
          <p className='text-4xl md:text-5xl font-bold'>Hi, <span className='text-3xl'>👋</span> <br />I'm  
          <span className='ps-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Shourav Paul</span></p>
          <div className='text-2xl font-semibold py-2'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "and I'm Wed Developer",
                1000,
                "and I'm Wed Designer",
                1000,
                "and I'm Full Stack Developer",
                1000,

              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className='md:text-justify'>I am a MERN Stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
          <div className='flex justify-center md:justify-start gap-7 mt-5'>
            <button className='py-1 md:py-2 ps-3 pe-7 text-sm font-semibold uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]'>contact me
              <span className='h-10 w-10 md:h-11 md:w-11  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-5'><FaArrowRight /></span>
            </button>
            <button className='py-1 md:py-2 ps-3 pe-7 text-sm font-semibold uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]'>Get Resume
              <span className='h-10 w-10 md:h-11 md:w-11  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-5'><FaDownload /></span>
            </button>
          </div>

        </motion.div>

        <motion.div initial={{ x: 150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "tween", duration: 1 }} className='basis-full md:basis-1/2 self-center'>
          <div className="main-container">
            <div className="main w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <div className="big-circle">
                <div className="icon-block">
                  <img src={react} alt="web design icon" />
                </div>
                <div className="icon-block">
                  <img src={firebase} alt="game design icon" />
                </div>
                <div className="icon-block">
                  <img src={nodejs} alt="game dev icon" />
                </div>
                <div className="icon-block">
                  <img src={mongodb} alt="ui-ux icon" />
                </div>
              </div>
              <div className="circle">
                <div className="icon-block">
                  <img src={css} alt="app icon" />
                </div>
                <div className="icon-block">
                  <img src={bootstrap} alt="blockchain icon" />
                </div>
                <div className="icon-block">
                  <img src={tailwindcss} alt="blockchain icon" />
                </div>
                <div className="icon-block">
                  <img src={expressjs} alt="ar-vr icon" />
                </div>



              </div>
              <div className="center-logo">

                <img src={profile} alt="My-Picture" className='w-36 h-36 md:w-52 md:h-52 rounded-full' />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HomeSection;