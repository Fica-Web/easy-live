import React from 'react'

const Hero = () => {
    return (
        <div className='h-[80vh] px-20 pt-3'>
            <div className='h-full flex'>
                <div className='h-full flex flex-col'>
                    <div className='h-fit w-fit bg-secondary'>
                        <div className='bg-white rounded-br-3xl'>
                            <h1 className='text-7xl p-5 font-bold font-semiBold tracking-wide text-primary whitespace-nowrap'>
                                Your Period, <br /> <span>Reimagined</span>
                            </h1>
                        </div>
                    </div>
                    <div className='bg-secondary w-full h-full rounded-tl-3xl rounded-bl-3xl'>
                        <div className='h-full flex flex-col justify-end gap-4 p-8'>
                            <h2 className='text-white text-3xl font-serif'>
                                Your Best Period <br />
                                Starts Here,
                            </h2>
                            <div className='text-white'>
                                <button className='border border-white p-2 px-5'>
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full rounded-e-3xl rounded-t-3xl bg-secondary'>
                    {/* <img 
                        src="https://t4.ftcdn.net/jpg/03/95/92/71/360_F_395927156_ooPLzxdAcHZCt0RukD6VpqwYMkGOdE8H.jpg" 
                        alt="Hero-image" 
                        className=''
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero
