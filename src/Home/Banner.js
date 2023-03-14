import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import pic1 from '../Pictures/ezgif.com-webp-to-jpg.jpg'
import pic2 from '../Pictures/ezgif.com-webp-to-jpg (1).jpg'

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

                        <div className='h-[700px]'>
                            <img src={pic1} alt="" className='h-[600px] w-full' />
                        </div>

                    </SwiperSlide>


                    <SwiperSlide>

                        <div className='h-[700px]'>
                            <img src={pic2} alt="" className='h-[600px] w-full' />
                        </div>

                    </SwiperSlide>



                </Swiper>
            </>
        </div>
    );
};

export default Banner;