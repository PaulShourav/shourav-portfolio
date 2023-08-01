import { motion } from "framer-motion"

const SkillCard = ({skill}) => {
    const {skill_name,image,percentage}=skill
    return (
        <motion.div initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:"tween",duration:2}} className='w-[160px] md:w-[250px] flex flex-col md:flex-row bg-white text-center md:text-left items-center p-4 gap-4 border-s-[3px] border-[#14A850]  shadow-md shadow-slate-400 relative'>
            <img src={image} alt="css" className='w-[70px] h-[70px] p-1 rounded-full border-2' />
            <div className="">
                <p>{skill_name}</p>
                <progress className="progress progress-primary " value={percentage} max="100"></progress>
            </div>
            <div className="badge badge-primary rounded-e-none  absolute top-0 right-0">{percentage}%</div>
        </motion.div>
    );
};

export default SkillCard;