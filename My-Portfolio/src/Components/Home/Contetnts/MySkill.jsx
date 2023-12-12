import SharedHeading from "../../SharedComponent/SharedHeading";
import { motion } from "framer-motion";

import html from '../../../assets/Html5.jpeg'
import css from '../../../assets/CSS3.jpeg'
import js from '../../../assets/JS.jpeg'
import nodejs from '../../../assets/Nodejs.jpeg'
import mongoDB from '../../../assets/MongoDB.jpeg'
import react from '../../../assets/React.jpeg'



const MySkill = () => {
    return (
        <div className="lg:w-[1280px] mx-auto py-20">
            <SharedHeading heading={'My Expertises'}></SharedHeading>
            <div className="mb-5 text-[#B0578D] flex flex-col max-w-xl justify-center items-center mx-auto text-center ">
                <p>I have  experience building websites. Below is a quick
                    overview of my main technical skill sets and technologies i use. Want to find out more about my experience?
                    Check out my online resume and project portfolio</p>
            </div>
            <div className="hero  lg:h-[300px] border-solid border-4 border-[#B0578D]" >

                <div className="hero-content  ">

                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-10 text-[#B0578D] font-bold text-2xl">
                        {/* html */}
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={html}   // Replace with appropriate alt text
                                className=' w-[100px] h-[100px] '
                            />
                            <h1 >HTML5</h1>
                        </motion.div>
                        {/* css */}
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={css}   // Replace with appropriate alt text
                                className=' w-[100px] h-[100px] '
                            />
                            <h1 >CSS3</h1>
                        </motion.div>
                        {/* js */}
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={js}   // Replace with appropriate alt text
                                className=' w-[100px] h-[100px] '
                            />
                            <h1 >JavaScript</h1>
                        </motion.div>
                        {/* react */}
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={react}   // Replace with appropriate alt text
                                className=' w-[100px] h-[100px] '
                            />
                            <h1 >React Js</h1>
                        </motion.div>
                        {/* nodejs */}
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={nodejs}   // Replace with appropriate alt text
                                className=' w-[100px] h-[100px] '
                            />
                            <h1 >Node JS</h1>
                        </motion.div>
                        {/* mongoDB */}
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={mongoDB}   // Replace with appropriate alt text
                                className=' w-[100px] h-[100px] '
                            />
                            <h1 >MongoDB</h1>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MySkill;