import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import tech1 from '../../assets/tech1.png'
import tech2 from '../../assets/Tech2.png'
import tech3 from '../../assets/tech3.png'
import { Link } from 'react-router-dom';

const Project3 = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='px-10 py-10'>
            <div>
                <h1 className='text-2xl font-semibold mb-5 text-[#B0578D]'><span className='text-black'>Project Name:</span> Tech Fuision Emporium</h1>
                <p className='text-lg font-semibold mb-5 text-[#B0578D]'><span className='text-black'>Project Description:</span> Tech Fusion Emporium an e-commerce website that has the outstanding products of 6 famous electronics brands name SONY, GOOGLE,SAMSUNG,APPLE,LENOVO and XIAOMI. In this project I have used HTML,CSS,JS AND REACT JS in front-end and in the backend MONGODB has been used .</p>
                <Link className='btn mb-5 bg-[#B0578D] text-[#FFE4D6]' to='https://tech-fusion-emporium.netlify.app'>Get a Preview</Link>
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper max-h-screen"
            >
                <SwiperSlide >
                    <img src={tech1} alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={tech2} alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={tech3} alt="" />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        {/* <circle cx="24" cy="24" r="20"></circle> */}
                    </svg>
                    <span ref={progressContent}></span>

                </div>
            </Swiper>

        </div>
    );
};

export default Project3;