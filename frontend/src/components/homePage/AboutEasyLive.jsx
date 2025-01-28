import React from "react";
// import aboutImage from "../assets/about-easylive.jpg"; // Replace with the correct image path

const AboutEasyLive = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center gap-10 py-16 px-8 lg:px-20 bg-gradient-to-b from-white to-easy-primary-dark">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-brown mb-4">
                    About EasyLive Marketing LLP
                </h2>
                <p className="text-gray-700 mb-6">
                    EasyLive Marketing LLP is committed to delivering high-quality hygiene
                    and personal care products. Our goal is to make these essential
                    products accessible to everyone, regardless of location or budget.
                    With a focus on sustainability and community support, EasyLive is
                    reshaping the way we think about hygiene.
                </p>
                <ul className="text-gray-600 list-disc list-inside mb-6">
                    <li>High-quality hygiene and personal care products</li>
                    <li>Affordable and accessible solutions for all</li>
                    <li>Commitment to sustainability and eco-friendly packaging</li>
                    <li>Supporting communities and social causes</li>
                </ul>
                <button className="bg-brown text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                    Learn More
                </button>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
                <img
                    src='https://t4.ftcdn.net/jpg/00/42/92/25/360_F_42922531_lwJIGeTdQqWKdq5Zu5M0y2Zs5JPLRnl3.jpg'
                    alt="About EasyLive"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default AboutEasyLive;
