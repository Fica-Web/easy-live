import React from 'react';
import cups from '../../assets/images/2cup-low.png';

const Commitment = () => {
    return (
        <div className="w-11/12 mx-auto sm:px-4 lg:px-7 my-20 mb-36">
            <div className="bg-primary rounded-3xl lg:flex relative pb-10 lg:pb-0">
                {/* Image Section */}
                <div className="flex items-end justify-center lg:justify-start relative">
                    <img
                        src={cups}
                        alt="Flowra Cups"
                        className="object-cover mt-[-40px] lg:mt-[-70px] lg:mb-[-45px] mb-0"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center lg:mx-16 px-4 sm:px-8 lg:pt-0 pt-10 gap-8 lg:w-1/2 w-full lg:my-20 sm:my-12 my-5">
                    <h2 className="text-pink font-semiBold text-center lg:text-start lg:text-5xl text-4xl">
                        Our Commitment
                    </h2>
                    <p className="lg:text-lg text-pink">
                        At Flowra, we’re more than a brand—we’re your partner in
                        period care. From offering expert tips and guides to answering
                        your questions, we’re here to ensure your experience is nothing
                        short of amazing. Our mission is to help every woman feel
                        confident, comfortable, and in control during her cycle.
                    </p>
                    <p className="lg:text-lg text-pink">
                        Flowra: For you, for the planet, for better periods.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Commitment;