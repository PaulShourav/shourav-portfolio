import { FaEye, FaGithub } from "react-icons/fa6";
import Heading from "./Heading";

const ProjectSection = ({sectionId}) => {
    return (
        <section className="my-container mb-28" id="projects">
            <Heading name={"Projects"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                <div className=" h-96  bg-base-100 border-s-[3px] border-[#14A850] shadow-md ">
                    <div className="h-2/3 overflow-hidden  ">
                        <img src="../../public/project-images/project1.png" alt="Shoes" className="object-cover rounded-t-3xl project-image" />
                    </div>
                    <div className="h-2/6 p-5 bg-green-100">
                        <h2 className="card-title justify-center mb-5">Shoes!</h2>
                        <div className="flex gap-6 justify-center">
                            <a href="http://" className='text-sm w-24  py-1 ps-3 uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]' target="_blank" rel="noopener noreferrer">Github
                            <span className=' p-3  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-2'><FaGithub /></span>
                            </a>
                            <a href="http://" className='text-sm w-24 py-1 ps-3 uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]' target="_blank" rel="noopener noreferrer">Live
                            <span className=' p-3  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-2'><FaEye /></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" h-96  bg-base-100 border-s-[3px] border-[#14A850] shadow-md ">
                    <div className="h-2/3 overflow-hidden  ">
                        <img src="../../public/project-images/project1.png" alt="Shoes" className="object-cover rounded-t-3xl project-image" />
                    </div>
                    <div className="h-2/6 p-5 bg-green-100">
                        <h2 className="card-title justify-center mb-5">Shoes!</h2>
                        <div className="flex gap-6 justify-center">
                            <a href="http://" className='text-sm w-24  py-1 ps-3 uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]' target="_blank" rel="noopener noreferrer">Github
                            <span className=' p-3  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-2'><FaGithub /></span>
                            </a>
                            <a href="http://" className='text-sm w-24 py-1 ps-3 uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]' target="_blank" rel="noopener noreferrer">Live
                            <span className=' p-3  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-2'><FaEye /></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" h-96  bg-base-100 border-s-[3px] border-[#14A850] shadow-md ">
                    <div className="h-2/3 overflow-hidden  ">
                        <img src="../../public/project-images/project1.png" alt="Shoes" className="object-cover rounded-t-3xl project-image" />
                    </div>
                    <div className="h-2/6 p-5 bg-green-100">
                        <h2 className="card-title justify-center mb-5">Shoes!</h2>
                        <div className="flex gap-6 justify-center">
                            <a href="http://" className='text-sm w-24  py-1 ps-3 uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]' target="_blank" rel="noopener noreferrer">Github
                            <span className=' p-3  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-2'><FaGithub /></span>
                            </a>
                            <a href="http://" className='text-sm w-24 py-1 ps-3 uppercase rounded-full border-2 border-[#14A850] flex items-center relative hover:bg-[#14A850]' target="_blank" rel="noopener noreferrer">Live
                            <span className=' p-3  rounded-full bg-[#14A850] flex justify-center items-center absolute -right-2'><FaEye /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;