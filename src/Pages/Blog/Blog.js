import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../Pictures/banner2.jpg'

const Blog = () => {
    return (
        <div>
            <div className="relative">

                <img src={pic1} alt="" className='w-full h-[200px] lg:h-[300px]' />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="w-2/5 lg:w-1/2 text-normal lg:text-4xl text-black  font-bold whitespace-pre-line lg:whitespace-normal wh">Decorate Your House With Plants <br />
                        Make it More Beautiful</p>
                </div>
            </div>

            <p className='lg:text-4xl text-green-500 my-10 font-bold'>Learn Something New</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-10 px-4">

                <div className="... h-[413px] text-start px-5 py-4 lg:py-10 order-2 lg:order-1">
                    <div className=''>
                        <p className='text-3xl font-semibold lg:my-5'>
                            How To Decorate Your House With Plants, Some tips.
                        </p>
                        <p className='lg:my-7'>
                            Decorating your house with plants is a wonderful way to bring a touch of nature into your living space. Not only do plants add color and texture to your home decor, but they also help purify the air and promote a sense of calm and relaxation. When it comes to decorating with plants, there are several things to consider. First, choose plants that are easy to care for and fit the lighting conditions of your home. Consider the size and style of your pots, and mix and match different types of plants to create a visually appealing display.
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
                        <iframe className="h-[413px] w-full mx-auto aspect-video ..." src="https://www.youtube.com/embed/uq99p3o582g" title='youtube video'></iframe>
                    </div>
                </div>

            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-5 px-4">

                <div className="... lg:h-[413px] order-1 lg:order-1">
                    <div>
                        <iframe className="h-[413px] w-full mx-auto aspect-video ..." src="https://www.youtube.com/embed/PpCw5tB59Hk" title='youtubeii video'></iframe>

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

export default Blog;


<iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>