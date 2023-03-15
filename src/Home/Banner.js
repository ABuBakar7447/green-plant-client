import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import pic1 from '../Pictures/ezgif.com-webp-to-jpg.jpg'
import pic2 from '../Pictures/ezgif.com-webp-to-jpg (1).jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className='h-[600px] relative'>
                            <img src={pic1} alt="" className='h-[600px] w-full' />

                            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10">
                                <p className='text-6xl text-green-600 text-start font-semibold my-2'>Artificial Plants</p>
                                <p className='text-black text-2xl text-start font-bold lg:font-normal my-2'>
                                    It will make your house more gorgeous
                                </p>



                                <div className='flex justify-start mt-5'>
                                    <Link to=''>
                                        <button className='btn rounded-none btn-outline hover:bg-green-600 hover:border-0 px-10'>
                                            VISIT NOW
                                        </button>
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </SwiperSlide>


                    <SwiperSlide>

                        <div className='h-[600px] relative'>
                            <img src={pic2} alt="" className='h-[600px] w-full' />

                            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10">
                                <p className='text-6xl text-green-600 text-start font-semibold my-2'>
                                    Plant & Flower
                                </p>

                                <p className='text-black text-2xl text-start font-bold lg:font-normal my-2'>
                                    It will make your house more gorgeous
                                </p>



                                <div className='flex justify-start mt-5'>
                                    <Link to=''>
                                        <button className='btn rounded-none btn-outline hover:bg-green-600 hover:border-0 px-10'>
                                            VISIT NOW
                                        </button>
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </SwiperSlide>



                </Swiper>
            </>
        </div>
    );
};

export default Banner;