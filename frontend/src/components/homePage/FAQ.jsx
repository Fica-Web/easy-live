import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What Makes Bench Cafe Exceptional?",
            answer: (
                <>
                    <p className="my-2"><strong>Diverse Menu Options</strong></p>
                    <p>Whether you crave a hearty rice and chicken dish, a refreshing healthy salad, or a juicy shawarma, Bench Cafe caters to all taste preferences. Their menu also includes flavorful burgers and perfectly grilled fish, making it a favorite for locals and tourists alike.</p>

                    <p className="my-2"><strong>Premium Location in Barsha</strong></p>
                    <p>Located in the heart of Barsha, Bench Cafe is easily accessible and surrounded by popular attractions. This makes it the perfect spot for both casual meetups and special occasions.</p>

                    <p className="my-2"><strong>Authentic Arabic Cuisine</strong></p>
                    <p>For those searching for the best Arabic restaurant in Al Barsha, Bench Cafe is a top choice. Their expertly crafted dishes reflect the rich flavors of Arabic traditions while offering a modern twist.</p>
                </>
            ),
        },
        {
            question: "Is Barsha Heights Expensive?",
            answer: (
                <p>
                    Barsha Heights is known for its upscale lifestyle, offering high-quality
                    services and experiences. While dining in this area might be perceived
                    as premium, Bench Cafe provides an affordable yet luxurious dining
                    experience, ensuring you get excellent value for your money.
                </p>
            ),
        },
        {
            question: "Why You Should Choose Bench Cafe",
            answer: (
                <>
                    <p><strong>Perfect Ambiance</strong></p>
                    <p>Bench Cafe offers a cozy and welcoming atmosphere, making it ideal for family dinners, date nights, or casual hangouts.</p>

                    <p><strong>Exceptional Service</strong></p>
                    <p>Known for its friendly staff and quick service, Bench Cafe ensures every guest feels valued and satisfied.</p>

                    <p><strong>Customer Reviews</strong></p>
                    <p>Guests consistently rate Bench Cafe as the best restaurant in Barsha, praising its high-quality food, warm ambiance, and excellent service.</p>
                </>
            ),
        },
        {
            question: "How Bench Cafe Competes with Other Restaurants",
            answer: (
                <p>
                    In a neighborhood bustling with dining options, Bench Cafe distinguishes
                    itself through:
                    <ul>
                        <li>A focus on premium-quality food and diverse menu options.</li>
                        <li>Competitive pricing that appeals to both locals and tourists.</li>
                        <li>
                            A reputation as a standout Arabic restaurant in Al Barsha while
                            offering international cuisine.
                        </li>
                    </ul>
                </p>
            ),
        },
        {
            question: "Discover Bench Cafe Today",
            answer: (
                <p>
                    Looking for the best restaurant in Barsha? Visit Bench Cafe for an
                    unforgettable dining experience. From authentic Arabic dishes to
                    global favorites, we promise to exceed your expectations.
                </p>
            ),
        },
    ];

    return (
        <div className="mt-10 lg:mt-20 w-11/12 mx-auto">
            <h2 className="font-semiBold text-2xl lg:text-4xl xl:text-6xl text-center mb-10 lg:mb-16">You have questions, <br />
            we have answers.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-slate-300 pb-6 p-4"
                    >
                        <button
                            className="w-full text-left font-semibold flex justify-between items-center font-Montserrat text-textColor text-base lg:text-lg"
                            onClick={() => toggleQuestion(index)}
                        >
                            {item.question}
                            <span>{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="mt-2 text-gray-700 font-Montserrat text-textColor">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;