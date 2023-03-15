import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../Pictures/ezgif.com-webp-to-jpg (2).jpg'

const Ext1 = ({categories}) => {
    const {category_name,img_url} = categories
    return (
        <div>
            

                <div>
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img_url} alt='' className="w-full rounded-lg" />

                        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10">
                            <p className='text-3xl text-green-600 text-start font-bold my-2'>
                                {category_name}
                            </p>
                            <p className='text-black text-3xl font-bold'>New Collection</p>



                            <div className='flex justify-start mt-5'>
                                <Link to={`/products/${category_name}`}>
                                    <button className='btn rounded-none btn-outline hover:bg-green-600 hover:border-0'>
                                        VISIT NOW
                                    </button>
                                </Link>
                            </div>


                        </div>



                    </div>

                </div>

            

        </div>
    );
};

export default Ext1;