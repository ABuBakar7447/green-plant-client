import React from 'react';


const DetailsCard = ({ viewProduct }) => {
    const { _id, img_url, product_name, location, resale_price, seller_name, product_status, seller_email } = viewProduct;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;