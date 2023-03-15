import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../Pictures/ezgif.com-webp-to-jpg (4).jpg'
import pic2 from '../Pictures/ezgif.com-webp-to-jpg (5).jpg'

const Ext2 = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-green-600 font-bold mt-24'>
                Our Blog
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-10 px-4">

                <div className="... h-[413px] text-start px-5 py-4 lg:py-10 order-2 lg:order-1">
                    <div className=''>
                        <p className='text-3xl font-semibold lg:my-5'>
                            Plants Help Make Your House More Beautiful
                        </p>
                        <p className='lg:my-7'>
                            Plants are a wonderful addition to any home or living space. Not only do they add natural beauty and life to a room, but they also have a number of health benefits that can improve your overall wellbeing.For starters, plants help purify the air in your home. They absorb toxins and other harmful chemicals from the air and release fresh, clean oxygen into the atmosphere. This can help improve your respiratory health, reduce the risk of allergies, and even boost your immune system.
                        </p>

                        <div className='flex justify-start mt-5'>
                            <Link to=''>
                                <button className='btn btn-outline hover:bg-green-600 hover:border-0 rounded-none'>
                                    EXPLORE MORE
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>



                <div className="... lg:h-[413px] order-1 lg:order-2">
                    <div>
                        <img src={pic1} alt="" className="border image-full" />

                    </div>
                </div>

            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-5 px-4">

                <div className="... lg:h-[413px] order-1 lg:order-1">
                    <div>
                        <img src={pic2} alt="" className="border image-full" />

                    </div>
                </div>

                <div className="... h-[413px] text-start px-5 py-4 lg:py-10 order-2 lg:order-2">
                    <div className=''>
                        <p className='text-3xl font-semibold lg:my-5'>
                            Plants Help Make Your House More Beautiful
                        </p>
                        <p className='lg:my-7'>
                            Plants are a wonderful addition to any home or living space. Not only do they add natural beauty and life to a room, but they also have a number of health benefits that can improve your overall wellbeing.For starters, plants help purify the air in your home. They absorb toxins and other harmful chemicals from the air and release fresh, clean oxygen into the atmosphere. This can help improve your respiratory health, reduce the risk of allergies, and even boost your immune system.
                        </p>

                        <div className='flex justify-start mt-5'>
                            <Link to=''>
                                <button className='btn btn-outline hover:bg-green-600 hover:border-0 rounded-none'>
                                    EXPLORE MORE
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>





            </div>




        </div>
    );
};

export default Ext2;