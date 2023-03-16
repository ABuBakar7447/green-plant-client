import React from 'react';
import pic1 from '../../../Pictures/banner2.jpg'

const DashBoard = () => {
    return (
        <div>
            <div className="relative">
                
                <img src={pic1} alt="" className='w-full h-[200px] lg:h-[300px]' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="w-2/5 lg:w-1/2 text-normal lg:text-4xl text-black  font-bold whitespace-pre-line lg:whitespace-normal wh">Decorate Your House With Plants <br/> 
                        Make it More Beautiful</p>
                    </div>
            </div>

        </div>
    );
};

export default DashBoard;