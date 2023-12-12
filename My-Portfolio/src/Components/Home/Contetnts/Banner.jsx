import banner from '../../../assets/pic15.jpeg'
import me from '../../../assets/dd.jpg'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="hero min-h-screen text-[#B0578D]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="py-40 hero-content text-center flex-col-reverse lg:flex-row ">

                <motion.div
                    className="box text-center lg:text-left flex-1"
                    initial={{ opacity: 0, scale: 0.5, y: -30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <motion.p
                        className='text-2xl font-medium py-6'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        Hi,I am
                    </motion.p>
                    <motion.h1
                        className="text-5xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        Syeda Umme Ayman
                    </motion.h1>

                    <motion.p
                        className='text-xl font-medium py-2'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        Jr. Front-End Developer
                    </motion.p>

                    <Link to='https://drive.google.com/file/d/1t4HnmHrXDG0NAL9SmH_lxkzs2kYY2cuy/view?usp=sharing'>
                        <motion.button
                            className='btn bg-[#B0578D] text-[#FFE4D6] mr-2'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            Download CV
                        </motion.button>
                    </Link>


                    <Link to='/contact'>
                        <motion.button
                            className='btn bg-[#B0578D] text-[#FACBEA]'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.9,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            Contact
                        </motion.button>
                    </Link>
                </motion.div>
                <motion.div
                    className="box flex-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <motion.img
                        src={me}   // Replace with appropriate alt text
                        className='lg:w-[500px] w-[400px] h-[400px] lg:h-[500px] rounded-full border-solid border-4 border-[#B0578D] '
                    />
                </motion.div>

            </div>

        </div>
    );
};

export default Banner;