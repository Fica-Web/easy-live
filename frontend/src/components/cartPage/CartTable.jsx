import React from 'react';
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartTable = () => {
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

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="w-11/12 lg:w-10/12 mx-auto my-10">
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty!</p>
            ) : (
                <>
                    <div className="hidden md:block">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-dark-green">
                                    <th className="py-5 font-semibold text-lg text-center">Image</th>
                                    <th className="py-5 font-semibold text-lg text-center">Product</th>
                                    <th className="py-5 font-semibold text-lg text-center">Price</th>
                                    <th className="py-5 font-semibold text-lg text-center">Quantity</th>
                                    <th className="py-5 font-semibold text-lg text-center">Total</th>
                                    <th className="py-5 font-semibold text-lg text-center">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50 border-b">
                                        <td className="p-3 py-6 flex justify-center">
                                            <img
                                                src='https://themewagon.github.io/furni/images/product-1.png'
                                                alt={item.name}
                                                className="object-cover rounded-lg max-h-24"
                                            />
                                        </td>
                                        <td className="p-3 text-center">{item.name}</td>
                                        <td className="p-3 text-center">${item.price}</td>
                                        <td className="p-3 text-center">
                                            <div className="flex items-center justify-center gap-3">
                                                <FaMinus className="cursor-pointer text-gray-500 hover:text-gray-700" />
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    className="w-16 p-2 border rounded-lg focus:outline-none text-center"
                                                    readOnly
                                                />
                                                <FaPlus className="cursor-pointer text-gray-500 hover:text-gray-700" />
                                            </div>
                                        </td>
                                        <td className="p-3 text-center">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                        <td className="p-3 text-center">
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                title="Remove item"
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-lg p-4 shadow-sm bg-white flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src='https://themewagon.github.io/furni/images/product-1.png'
                                        alt={item.name}
                                        className="object-cover rounded-lg w-24 h-24"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-gray-500">Price: ${item.price}</p>
                                        <p className="text-gray-500">
                                            Total: ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <FaMinus className="cursor-pointer text-gray-500 hover:text-gray-700" />
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            className="w-12 p-2 border rounded-lg focus:outline-none text-center"
                                            readOnly
                                        />
                                        <FaPlus className="cursor-pointer text-gray-500 hover:text-gray-700" />
                                    </div>
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        title="Remove item"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <h3 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h3>
                        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
                            Checkout
                        </button>
                    </div> */}
                </>
            )}
        </div>
    );
};

export default CartTable;