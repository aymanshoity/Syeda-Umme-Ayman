import { Link } from 'react-router-dom';
import myPicture from '../../../assets/crop.jpg'
import SharedHeading from '../../SharedComponent/SharedHeading';

const AboutMe = () => {
    return (
        <div className="lg:w-[1280px] mx-auto py-40" >
            <SharedHeading heading={'Who I am'}></SharedHeading>
            <div className="hero min-h-screen bg-[#B0578D] text-[#FFE4D6] rounded-lg" >

                <div className="hero-content text-center lg:text-left flex flex-col lg:flex-row ">
                    <img className='lg:w-[500px] w-[300px] lg:h-[500px]  h-[300px]  rounded-xl border-solid border-4 border-[#D988B9]' src={myPicture} alt="" />
                    <div className="max-w-md">
                        <p className="mb-5 text-2xl">Hello....</p>
                        <h1 className="mb-5 text-3xl font-bold">I'm a Creative Web Developer</h1>
                        <p className="mb-5">I'm a dynamic junior front-end developer. My expertise lies in crafting immersive web experiences.I aspire to contribute to the projects that not only meet current standards but also set new benchmarks for excellence.
                            .</p>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div>
                                <p className=' font-semibold'>Name:</p>
                                <p className='mb-5 '>Syeda Umme Ayman</p>
                            </div>
                            <div>
                                <p className=' font-semibold'>Email:</p>
                                <p className='mb-5 '>aymanshoity@gmail.com</p>
                            </div>
                            <div>
                                <p className=' font-semibold'>Date of Birth:</p>
                                <p className='mb-5 '>19, February,1997</p>
                            </div>
                            <div>
                                <p className=' font-semibold'>Age:</p>
                                <p className='mb-5 '>26+</p>
                            </div>
                            <div>
                                <p className=' font-semibold'>Contact:</p>
                                <p className='mb-5 '>01973507152</p>
                            </div>
                            <div>
                                <p className=' font-semibold'>From:</p>
                                <p className='mb-5 '>Dhaka,Bangladesh</p>
                            </div>
                        </div>
                        <Link to='/contact'>
                            <button className="btn bg-[#FACBEA] font-semibold  text-[#B0578D]">Hire me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;