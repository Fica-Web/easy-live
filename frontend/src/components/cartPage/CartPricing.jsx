import React from 'react'

const CartPricing = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-10'>
            <div className='sm:flex justify-end '>
                <div className='flex flex-col gap-5 sm:max-w-sm w-full bg-gray-100 rounded-lg p-5'>
                    <h3 className='text-3xl font-semiBold'>
                        Cart Total
                    </h3>
                    <div className='flex justify-between sm:px-5 border-b pb-2'>
                        <p className='text-xl font-semibold'>
                            Subtotal:
                        </p>
                        <p className='text-lg'>
                            80
                        </p>
                    </div>
                    <div className='flex justify-between sm:px-5 border-b pb-2'>
                        <p className='text-xl font-semibold'>
                            Total price:
                        </p>
                        <p className='text-lg'>
                            80
                        </p>
                    </div>
                    <div className='w-full flex justify-end px-3'>
                        <button className='border border-dark-green rounded-full p-2 px-5 hover:bg-dark-green hover:text-white'>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPricing
