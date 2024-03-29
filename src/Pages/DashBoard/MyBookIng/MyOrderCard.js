import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderCard =({viewOrder}) => {
    const {_id, quantity, product_img, name, email, productname, resaleprice, phone, location} = viewOrder
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
            <figure><img className='h-[400px] w-3/4'  src={product_img} alt="Shoes" /></figure>
                <div className="card-body">
                    

                    <h2 className=" my-5 text-center text-2xl font-serif font-bold">{productname}</h2>

                    <h3 className='font-bold font-serif text-[#749383]'>Product Price: <span className=' text-black'> ${resaleprice}</span> </h3>

                    <h3 className='font-bold font-serif text-[#749383]'>Product Quantity: <span className=' text-black'>{quantity}</span> </h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Your Name:<span className='text-black'> {name}</span></h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Your Location:<span className='text-black'> {location}</span></h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Your Number:<span className='text-black'> {phone}</span> </h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Your Email:<span className='text-black'> {email}</span></h3>


                    

                    <div className=' md:flex lg:flex-row flex m-5 justify-center'>
                    <Link to=''>
                    <button className='btn rounded-none btn-outline hover:bg-green-600 hover:border-0'>Proced For Payment</button>
                    </Link>
                    </div>

                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default MyOrderCard;