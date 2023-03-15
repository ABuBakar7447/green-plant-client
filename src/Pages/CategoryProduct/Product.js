import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import pic1 from '../../Pictures/banner2.jpg'

const Product = () => {
    const productDetails = useLoaderData()
    return (
        <div className=''>
            <div className="relative">
                
                <img src={pic1} alt="" className='w-full h-[200px] lg:h-[300px]' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="w-2/5 lg:w-1/2 text-normal lg:text-4xl text-black  font-bold whitespace-pre-line lg:whitespace-normal wh">Decorate Your House With Plants <br/> 
                        Make it More Beautiful</p>
                    </div>
            </div>

            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 '>
                {
                    productDetails.map(viewProduct => <ProductCard
                        key={viewProduct._id}

                        viewProduct={viewProduct}
                    // setModalData={setModalData}

                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;