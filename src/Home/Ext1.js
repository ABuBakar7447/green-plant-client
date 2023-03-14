import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../Pictures/ezgif.com-webp-to-jpg (2).jpg'

const Ext1 = () => {
    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>

                <div>
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={pic1} alt='' className="w-full rounded-lg" />

                        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10">
                            <p className='text-black text-start'>New Collection</p>
                            <p className='text-black text-3xl font-bold'>New Collection</p>



                            <div className='flex justify-start mt-5'>
                                <Link to=''>
                                    <button className='btn rounded-none btn-outline hover:bg-green-600 hover:border-0'>
                                        VISIT NOW
                                    </button>
                                </Link>
                            </div>


                        </div>



                    </div>

                </div>

            </div>

        </div>
    );
};

export default Ext1;