import React from 'react';

const SingleProduct = ({ product }) => {
    const { image, firstTitle, lastTitle , description } = product;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto border border-secondary">
            {/* Product Image */}
            <div className="flex justify-center mb-4">
                <img
                    src={image}
                    // alt={firstTitle + lastTitle}
                    className="w-64 h-64 object-cover rounded-lg"
                />
            </div>

            {/* Product Title */}
            <div className='flex flex-col gap-3'>
                <h2 className="text-2xl font-semiBold text-gray-800 mb-2">
                    { firstTitle } <br />
                    <span>
                        { lastTitle }
                    </span>
                </h2>

                {/* Product Description */}
                <p className="text-gray-600 mb-6">{description}</p>

                <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-opacity-90">
                    Add to Cart
                </button>
            </div>

            {/* Features */}
            {/* {features && features.length > 0 && (
                <ul className="list-disc list-inside text-gray-700">
                    <h4 className="text-lg font-medium mb-2">Key Features:</h4>
                    {features.map((feature, index) => (
                        <li key={index} className="mb-1">
                            {feature}
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};

export default SingleProduct;