import React from "react";
import CartTable from "../components/cartPage/CartTable";
import CartPricing from "../components/cartPage/CartPricing";

const CartPage = () => {
    // Sample cart data for UI demonstration
    const cartItems = [
        {
            id: 1,
            name: "Sample Product 1",
            price: 29.99,
            quantity: 1,
            image: "https://via.placeholder.com/100",
        },
        {
            id: 2,
            name: "Sample Product 2",
            price: 19.99,
            quantity: 2,
            image: "https://via.placeholder.com/100",
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
