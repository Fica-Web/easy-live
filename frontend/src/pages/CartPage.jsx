import React from "react";
import CartTable from "../components/cartPage/CartTable";
import CartPricing from "../components/cartPage/CartPricing";
import productImg from '../assets/images/product-low.png'

const CartPage = () => {
    // Sample cart data for UI demonstration
    const cartItems = [
        {
            id: 1,
            name: "Sample Product 1",
            price: 29.99,
            quantity: 1,
            image: productImg,
        },
        {
            id: 2,
            name: "Sample Product 2",
            price: 19.99,
            quantity: 2,
            image: productImg,
        },
    ];

    

    return (
        <>
            <CartTable />
            <CartPricing />
        </>
    );
};

export default CartPage;
