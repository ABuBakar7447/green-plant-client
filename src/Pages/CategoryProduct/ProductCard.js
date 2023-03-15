import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ viewProduct }) => {
    const {_id, img_url, product_name, location, resale_price, seller_name, product_status, seller_email } = viewProduct;
    return (
        <div>
            <div className="card w-96 bg-base-100 rounded-none">
                <figure><img src={img_url} alt="Shoes" className='bg-slate-600' /></figure>
                <div className="card-body bg-slate-200">
                    <h2 className="font-bold text-xl">{product_name}</h2>
                    <p className='font-bold'>${resale_price}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/product/${_id}`}>
                            <button className="btn btn-sm rounded-none btn-outline hover:bg-green-600 hover:border-0">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;