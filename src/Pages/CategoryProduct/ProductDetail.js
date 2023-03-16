import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {

    const { user } = useContext(AuthContext)

    const [value, setValue] = useState(0);
    console.log(value)




    const [activeButton, setActiveButton] = useState(null);
    const [myString, setMyString] = useState('Tall');
    console.log(myString)
    console.log(activeButton)



    const details = useLoaderData()
    const { _id, img_url, product_name, location, resale_price, seller_name, product_status, seller_email } = details;

    const handleButtonClick = (buttonId, buttonValue) => {
        setActiveButton(buttonId);
        setMyString(buttonValue);


    };

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(phone, location);

        const book = {
            product_img: img_url,
            name: user?.displayName,
            email: user?.email,
            // size: myString,
            quantity:value,
            productname: product_name,
            resaleprice: resale_price,
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
                toast.success("You have booked this product succfully")
                form.reset('');
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
                        </div>
                         */}



                            <div className="form-control">
                                {/* <label className="label">
                                <span className="label-text">Product Name</span>
                            </label> */}
                                <input type="text" name='productname' defaultValue={product_name} disabled className="text-3xl font-bold" />
                            </div>


                            <div className="form-control">
                                <p className="text-3xl font-bold mt-2">${resale_price}</p>

                            </div>

                            {/* <div className='flex my-5'>

                                <p className='font-bold text-2xl'>Size: <span className='text-sm  underline'>{myString}</span></p>
                                <button className={`btn btn-sm btn-outline mx-2 rounded-none ${activeButton === 'button1' ? 'bg-green-500 border-0' : ''
                                    }`}
                                    onClick={() => handleButtonClick('button1', 'Tall')}>

                                    Tall
                                </button>


                                <button className={`btn btn-sm btn-outline mx-2 rounded-none ${activeButton === 'button2' ? 'bg-green-500 border-0' : ''
                                    }`}
                                    onClick={() => handleButtonClick('button2', 'Small')}>

                                    Small
                                </button>

                            </div> */}



                            <div className='flex my-4'>
                                <p className='font-bold text-2xl mr-6'>Quantity:</p>
                                <button className='btn btn-sm btn-outline rounded-none' type="button" onClick={handleIncrement}>
                                    +
                                </button>
                                <p className='w-[36px] h-[32px] text-xl text-center text-white font-bold bg-black border border-black'>{value}</p>
                                <button className='btn btn-sm btn-outline rounded-none' type="button" onClick={handleDecrement}>
                                    -
                                </button>
                            </div>


                            <div className="form-control">

                                <input type="text" name='phone' placeholder='Enter Phone Number' className=" border-black h-10 w-1/2 border-b-2 rounded bg-slate-100" />
                            </div>


                            <div className="form-control">

                                <input type="text" name='location' placeholder='Type your Location' className="border-black h-10 w-1/2 border-b-2 mt-10 rounded bg-slate-100" />
                            </div>









                            <div className="form-control mt-6">
                                <input htmlFor="" type="submit" className="btn btn-outline hover:bg-green-600 hover:border-0 rounded-none w-1/4" value="Book" />
                                <ToastContainer />

                            </div>
                        </form>


                    </div>
                </div>





            </div>
        </div>
    );
};

export default ProductDetail;