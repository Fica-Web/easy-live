import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const JoinFlowra = () => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20'>
            <div className='flex justify-center'>
                <div className='flex flex-col justify-center items-center gap-5 w-full lg:w-1/2 py-10'>
                    <h2 className='lg:text-5xl text-4xl font-semiBold '>
                        Join the Flowra Movement
                    </h2>
                    <p className='text-center text-lg text-gray-800'>
                        It’s time to rewrite the period story. Choose Flowra and enjoy an
                        experience that’s empowering, eco-friendly, and totally YOU.
                    </p>
                    <div className='border border-primary text-lg rounded-full px-6 p-1 flex items-center gap-2'>
                        <button className=''>
                            Join Now
                        </button>
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinFlowra
