import { Link } from "react-scroll";
import { BsHouseUpFill } from "react-icons/bs";
import { FaCoins, FaEnvelope, FaGraduationCap, FaPenNib, FaPersonRays, FaStreetView } from "react-icons/fa6";
import { useState } from "react";
import linkedin from '../../public/icons/linkedin.png'
import github from '../../public/icons/github.png'


const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleSetActive = (to) => {
        setActiveSection(to);
    };
    return (
        <div className="min-h-screen flex items-center ">
            <ul className="px-3 md:px-0 md:py-7 flex md:flex-col justify-between text-base bg-base-200 md:rounded-full border-t-2 md:border border-blue-700 fixed right-0 left-0 bottom-0  md:left-auto md:bottom-auto z-10 me-0 md:me-2 lg:me-4">
                <li>
                    <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}

                        isDynamic={true}
                        onSetActive={handleSetActive}
                    >
                        <button className={`px-4 py-4 tooltip tooltip-top md:tooltip-left  tooltip-primary nav-hover ${activeSection == 'home' ? 'tooltip-open nav-active' : ''}`} data-tip="Home">
                            <BsHouseUpFill />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}

                        isDynamic={true}
                        onSetActive={handleSetActive}
                    >
                        <button className={`px-4 py-4 tooltip tooltip-top md:tooltip-left  tooltip-primary nav-hover ${activeSection == 'about' ? 'tooltip-open nav-active' : ''}`} data-tip="About">
                            <FaStreetView />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}

                        isDynamic={true}
                        onSetActive={handleSetActive}
                    >
                        <button className={`px-4 py-4 tooltip tooltip-top md:tooltip-left  tooltip-primary nav-hover ${activeSection == 'education' ? 'tooltip-open nav-active' : ''}`} data-tip="Education">
                            <FaGraduationCap />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}

                        isDynamic={true}
                        onSetActive={handleSetActive}
                    >
                        <button className={`px-4 py-4 tooltip tooltip-top md:tooltip-left  tooltip-primary nav-hover ${activeSection == 'skills' ? 'tooltip-open nav-active' : ''}`} data-tip="Skills">
                            <FaPenNib />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}

                        isDynamic={true}
                        onSetActive={handleSetActive}
                    >
                        <button className={`px-4 py-4 tooltip tooltip-top md:tooltip-left  tooltip-primary nav-hover ${activeSection == 'projects' ? 'tooltip-open nav-active' : ''}`} data-tip="Projects">
                            <FaCoins />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}

                        isDynamic={true}
                        onSetActive={handleSetActive}
                    >
                        <button className={`px-4 py-4 tooltip tooltip-top md:tooltip-left  tooltip-primary nav-hover ${activeSection == 'contact' ? 'tooltip-open nav-active' : ''}`} data-tip="Contact">
                            <FaEnvelope />
                        </button>
                    </Link>
                </li>


            </ul>

            {/* Social media Left side */}
            <div className=" fixed left-2 z-10 md:flex hidden flex-col gap-4">
                <a href="http://facebook.com" target="_blank" className="" rel="noopener noreferrer">
                    <img src={github} className="w-[46px] h-[46px] border-2 border-blue-700 rounded-full p-1" alt="" />
                </a>
                <a href="http://facebook.com" target="_blank" className="" rel="noopener noreferrer">
                    <img src={linkedin} className="w-12 h-12 rounded-full border-2 border-blue-700  p-1" alt="" />
                </a>
                <a href="http://facebook.com" target="_blank" className="" rel="noopener noreferrer">
                    <img src={github} className="w-12 h-12 border-2 border-blue-700 rounded-full p-1" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;