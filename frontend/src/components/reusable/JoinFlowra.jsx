import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import curvedTextImg from '../../assets/images/curved-text-2.png'

const JoinFlowra = () => {
    return (
        <div className='relative'>
            <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20 lg:mb-80 sm:mb-32'>
                <div className='flex justify-center'>
                    <div className='flex flex-col justify-center items-center gap-5 w-full lg:w-1/2 py-10'>
                        <h2 className='lg:text-5xl text-4xl font-semiBold '>
                            Join the Flowra Movement
                        </h2>
                        <p className='text-center text-lg text-gray-800'>
                            It’s time to rewrite the period story. Choose Flowra and enjoy an
                            experience that’s empowering, eco-friendly, and totally YOU.
                        </p>
                        <div className='border border-primary text-lg rounded-full px-6 p-2 flex items-center gap-2'>
                            <button className=''>
                                Join Now
                            </button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full absolute lg:top-32 sm:top-40 top-72">
                <img
                    src={curvedTextImg}
                    alt="Curved text image"
                    className="w-full object-cover "
                />
            </div>
        </div>
    )
}

export default JoinFlowra
