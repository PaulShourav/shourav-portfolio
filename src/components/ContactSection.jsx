import {FaPaperPlane, FaPenToSquare, FaRegAddressBook, FaRegEnvelope } from "react-icons/fa6";
import Lottie from "lottie-react";
import communication from './../assets/animation/communication.json'
import { motion } from "framer-motion"
import Heading from "./Heading";

const ContactSection = ({sectionId}) => {

    return (
        <section className="my-container mx-auto" id="contact">
            <Heading name={'Contact me'}/>
            <div className="flex flex-col lg:flex-row  mb-56">
            <motion.div initial={{x:-150,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"tween",duration:1}} className="basis-1/2 flex justify-center items-center object-cover">
                <Lottie animationData={communication} loop={true} style={{width:500,height:300}}/>

                </motion.div>
                <motion.div initial={{x:150,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"tween",duration:1}} className="basis-1/2 ">
                    <div >
                    <div className="flex items-center  border-b-2 bg-gray-100 focus-within:rounded-md border-[#14A850] w-full   focus-within:border focus-within:bg-white focus-within:shadow-md focus-within:shadow-[#14A850] mb-6">
                        <span className="p-2">
                            <FaRegAddressBook />
                        </span>
                        <input type="text" placeholder="Email" className="w-full px-4  bg-gray-100 focus:outline-none focus-within:bg-white"  />
                    </div>
                    <div className="flex items-center border-b-2 bg-gray-100  focus-within:rounded-md border-[#14A850]  w-full focus-within:border focus-within:bg-white focus-within:shadow-md focus-within:shadow-[#14A850] mb-6">
                        <span className="p-2">
                            <FaPenToSquare />
                        </span>
                        <input type="text" placeholder="Subject" className="bg-gray-100 w-full px-4  focus:outline-none focus-within:bg-white" />
                    </div>
                    <div className="flex items-center border-b-2 bg-gray-100  focus-within:rounded-md border-[#14A850]  w-full focus-within:border focus-within:bg-white focus-within:shadow-md focus-within:shadow-[#14A850] mb-6">
                        <span className="p-2 flex self-start">
                            <FaRegEnvelope />
                        </span>

                        <textarea cols={5} rows={5} placeholder="Message" className="bg-gray-100 w-full px-4 resize-none focus:outline-none focus-within:rounded-md focus-within:bg-white"></textarea>
                    </div>
                    <button className='w-40 h-11 ps-3 uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]'>contact me

                        <span className='h-11 w-11  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-2'><FaPaperPlane /></span>
                    </button>
                    </div>
                </motion.div>
            </div>
        </section>

    );
};

export default ContactSection;