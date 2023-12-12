import backgroundImage from '../../../assets/pic7.jpeg'
import SharedHeading from '../../SharedComponent/SharedHeading';
import { FaUserGraduate } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { FaSchoolFlag } from "react-icons/fa6";
const Education = () => {
    return (
        <div className='lg:w-[1280px] mx-auto py-20  '>
            <SharedHeading heading={'My Background'}></SharedHeading>
            <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <section className="text-[#B0578D]">
                    <div className="container mx-auto flex flex-col p-6">
                        <h2 className="py-4 text-3xl font-semibold text-center">Education</h2>
                        <ul className="timeline timeline-vertical">
                            <li>
                                <div className="timeline-start">2022</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                
                                <div className="timeline-end timeline-box bg-[#FACBEA]">
                                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                        <div className="flex items-center justify-center lg:col-span-1 col-span-full mr-4">

                                            <FaUserGraduate className="w-20 h-20" />
                                        </div>
                                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                            <span className="text-xl font-bold md:text-2xl">B.Sc in Biomedical Engineering</span>
                                            <span className="mt-4 text-gray-700">Military Institute of Science and Technology (MIST)</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-end font-bold">2017</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start timeline-box bg-[#FACBEA]">
                                    <div className="grid  justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                        <div className="flex items-center justify-center lg:col-span-1 col-span-full mr-4">
                                            <FaSchoolFlag className="w-20 h-20" />
                                        </div>
                                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                            <span className="text-xl font-bold md:text-2xl">HSC <small>(science)</small></span>
                                            <span className="mt-4 text-gray-700">Holy Cross College</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start font-bold">2015</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box bg-[#FACBEA]">
                                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                        <div className="flex items-center justify-center lg:col-span-1 col-span-full mr-4">
                                            <LuSchool className="w-20 h-20" />
                                        </div>
                                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                            <span className="text-xl font-bold md:text-2xl">SSC <small>(science)</small></span>
                                            <span className="mt-4 text-gray-700">Faizur Rahman Ideal Institute</span>

                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </li>

                        </ul>

                    </div>

                </section>

                
            </div>
        </div>
    );
};

export default Education;