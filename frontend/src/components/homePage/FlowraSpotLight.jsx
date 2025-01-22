import React from "react";
import flowraImage from "../../assets/images/cup-low.png"; // Replace with the correct image path

const FlowraSpotlight = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center gap-10 py-16 px-8 lg:px-20 bg-gradient-to-r from-pink-100 to-[#F598A6]">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-[#8A2B5B] mb-4">
                    Introducing Flowra Menstrual Cup
                </h2>
                <p className="text-gray-700 mb-6">
                    The ultimate solution for comfort and sustainability. Say goodbye to
                    single-use menstrual products and hello to a cost-effective,
                    eco-friendly alternative designed to empower women worldwide.
                </p>
                <ul className="text-gray-600 list-disc list-inside mb-6">
                    <li>Ultra-comfortable for all-day wear</li>
                    <li>Eco-friendly alternative to single-use products</li>
                    <li>Cost-effective and reusable</li>
                    <li>Easy to clean and maintain</li>
                </ul>
                <button className="bg-[#8A2B5B] text-white px-6 py-2 rounded-md hover:bg-[#72234a] transition">
                    Learn How It Works
                </button>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
                <img
                    src={flowraImage}
                    alt="Flowra Menstrual Cup"
                    className="w-3/4 h-auto rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default FlowraSpotlight;
