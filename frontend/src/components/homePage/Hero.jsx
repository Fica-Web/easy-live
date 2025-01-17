import React from 'react'

const Hero = () => {
    return (
        // <div className='w-full py-10'>
        //     <div className='flex md:flex-row flex-col items-center justify-center gap-4  h-full lg:px-20 md:px-16 sm:px-10 px-4'>
        //         <div>
        //             <img src="https://safecup.co/cdn/shop/files/imgonline-com-ua-compressed-Eza6vU2IvsnXPfY_800x.jpg?v=1637312250" alt="" />
        //         </div>

        //         <div className="lg:w-1/2">
        //             <div className="detail p-5">
        //                 <div className="flex flex-col gap-3">
        //                     <h2 className="text-4xl text-dark pb-2 font-mono font-semibold">Soothing, Refreshing, Cleansing with our Product</h2>
        //                     <p className="pb-3">
        //                         Ac varius lectus tellus tellus quisque tristique aenean.
        //                         Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel
        //                         purus velit dui vel egestas purus sed. Eget turpis tincidunt
        //                         faucibus montes arcu in nullam tortor orci. Nulla tellus sed
        //                         purus vestibulum sagittis pretium donec nec mattis ollis porta
        //                         sit ut.
        //                     </p>
        //                     <p>
        //                         Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis
        //                         pretium amet hac. Justo tristique sagittis sodales viverra
        //                         venenatis integer fringilla.
        //                     </p>
        //                     <div>
        //                         <button className='bg-orange-400 rounded-md px-5 p-1 text-white'>
        //                             Buy Now
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
