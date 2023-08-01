import { motion } from 'framer-motion';

const Heading = ({ name }) => {
    const circleVariants = {
        left: { x: -100, y: 0 },
        right: { x: 100, y: 0 },
    };
    return (
        <div className="flex flex-col justify-center items-center mb-12 ">
            <p className="uppercase text-3xl md:text-4xl font-bold  mb-4">{name}</p>
            <div className="flex flex-col justify-center items-center relative">
                <div className="bg-black w-64 md:w-80 h-1 rounded-full "></div>
                <motion.div
                    initial="left"
                    animate="right"
                    variants={circleVariants}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 5,
                    }} className="bg-red-800 w-4 h-4 rounded-full  -mt-5"></motion.div>
                <div className='bg-red-800 w-4 h-4 rounded-full absolute -right-1'></div>
                <div className='bg-red-800 w-4 h-4 rounded-full absolute -left-1'></div>
            </div>



        </div >
    );
};

export default Heading;