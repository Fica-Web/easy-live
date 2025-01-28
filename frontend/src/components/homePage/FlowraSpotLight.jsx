import React from "react";
import { Link } from "react-router-dom";
import flowraImage from "../../assets/images/cup-low.png"; // Replace with the correct image path

const FlowraSpotlight = () => {
    return (
        // <section className="flex flex-col lg:flex-row items-center gap-10 py-16 px-8 lg:px-20 bg-gradient-to-b from-white to-[#F598A6]">
        //     {/* Left Content */}
        //     <div className="lg:w-1/2 text-center lg:text-left">
        //         <h2 className="text-4xl font-bold text-[#8A2B5B] mb-4">
        //             Introducing Flowra Menstrual Cup
        //         </h2>
        //         <p className="text-gray-700 mb-6">
        //             The ultimate solution for comfort and sustainability. Say goodbye to
        //             single-use menstrual products and hello to a cost-effective,
        //             eco-friendly alternative designed to empower women worldwide.
        //         </p>
        //         <ul className="text-gray-600 list-disc list-inside mb-6">
        //             <li>Ultra-comfortable for all-day wear</li>
        //             <li>Eco-friendly alternative to single-use products</li>
        //             <li>Cost-effective and reusable</li>
        //             <li>Easy to clean and maintain</li>
        //         </ul>
        //         <button className="bg-[#8A2B5B] text-white px-6 py-2 rounded-md hover:bg-[#72234a] transition">
        //             Learn How It Works
        //         </button>
        //     </div>

        //     {/* Right Image */}
        //     <div className="lg:w-1/2 flex justify-center">
        //         <img
        //             src={flowraImage}
        //             alt="Flowra Menstrual Cup"
        //             className="w-3/4 h-auto rounded-lg shadow-lg"
        //         />
        //     </div>
        // </section>

        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20'>
                    <div className='bg-pink rounded-3xl lg:flex relative'>
                        <div className='flex flex-col lg:mx-16  px-4 sm:px-8 lg:pt-0 pt-10 gap-8 lg:w-1/2 w-full lg:my-20 sm:my-12 my-5 '>
                            <h2 className='text-primary font-semiBold text-center lg:text-start lg:text-6xl text-4xl '>
                                Introducing Flowra Menstrual Cup
                            </h2>
                            <p className=' lg:text-lg '>
                                The ultimate solution for comfort and sustainability. Say goodbye to
                                single-use menstrual products and hello to a cost-effective,
                                eco-friendly alternative designed to empower women worldwide.
                            </p>
                            <div className='flex justify-center lg:justify-start'>
                                <Link to={'/flowra'}>
                                    <button className='bg-primary text-white p-3 px-10 rounded-full text-lg font-thin'>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
        
                        <div  className='flex items-end justify-end'>
                            <img 
                                src={flowraImage}
                                alt="Flowra Cup Image" 
                                className='lg:absolute right-0 bottom-0'
                            />
                        </div>
                    </div>
                </div>
    );
};

export default FlowraSpotlight;
