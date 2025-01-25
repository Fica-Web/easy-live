import React from 'react';
import SingleProduct from './SingleProduct';

const ProductListing = ({ specifications }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-10 p-3 my-10">
            {specifications.map((product) => (
                <SingleProduct key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductListing
