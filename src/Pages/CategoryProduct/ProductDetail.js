import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';
const ProductDetail = () => {
    const details = useLoaderData()
    const { _id, img_url, product_name, location, resale_price, seller_name, product_status, seller_email } = details;



    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productname = form.productname.value;
        const resaleprice = form.resaleprice.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(name, email, productname, resaleprice, phone, location);

        const book = {
            product_img: img_url,
            name: name,
            email: email,
            productname: productname,
            resaleprice: resaleprice,
            phone: phone,
            location: location
        }

        fetch('http://localhost:5000/bookdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                


            })
    }




    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-10 px-4">

                <div className="... lg:h-[413px]">
                    <div>
                        <img src={img_url} alt="" className="border h-[413px] mx-auto" />

                    </div>
                </div>

                <div className="...  text-start px-5">
                    <div className=''>
                        {/* <p className='text-3xl font-semibold lg:my-5'>
                            {product_name}
                        </p> */}


                        <form onSubmit={handleForm} className=" bg-slate-200 ">
                        {/* <h1 className="text-4xl text-center font-bold">{product_name}</h1> */}

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} disabled className="input input-bordered" />
                        </div> */}


                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={user?.email} disabled className="input input-bordered" />
                        </div> */}


                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Product Name</span>
                            </label> */}
                            <input type="text" name='productname' defaultValue={product_name} disabled className="text-3xl font-bold" />
                        </div>


                        <div className="form-control">
                            <p className="text-3xl font-bold">${resale_price}</p>
                            
                        </div>


                        <div className="form-control">
                            
                            <input type="text" name='phone' className=" border-indigo-500 border-b-2" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Location</span>
                            </label>
                            <input type="text" name='location' placeholder='Type your Location' className="input input-bordered" />
                        </div>









                        <div className="form-control mt-6">
                            <input htmlFor="my-modal-3" type="submit" className="btn bg-[#cea274] hover:bg-[#749383] border-0" value="Book" />
                            
                        </div>
                    </form>

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

export default ProductDetail;