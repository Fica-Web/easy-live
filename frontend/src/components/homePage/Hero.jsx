import React from 'react'

const Hero = () => {
    return (
        <div className='w-full py-10'>
            <div className='flex md:flex-row flex-col items-center justify-center gap-4  h-full lg:px-20 md:px-16 sm:px-10 px-4'>
                <div>
                    <img src="https://safecup.co/cdn/shop/files/imgonline-com-ua-compressed-Eza6vU2IvsnXPfY_800x.jpg?v=1637312250" alt="" />
                </div>

                <div className="lg:w-1/2">
                    <div className="detail p-5">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-4xl text-dark pb-2 font-mono font-semibold">Soothing, Refreshing, Cleansing with our Product</h2>
                            <p className="pb-3">
                                Ac varius lectus tellus tellus quisque tristique aenean.
                                Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel
                                purus velit dui vel egestas purus sed. Eget turpis tincidunt
                                faucibus montes arcu in nullam tortor orci. Nulla tellus sed
                                purus vestibulum sagittis pretium donec nec mattis ollis porta
                                sit ut.
                            </p>
                            <p>
                                Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis
                                pretium amet hac. Justo tristique sagittis sodales viverra
                                venenatis integer fringilla.
                            </p>
                            <div>
                                <button className='bg-orange-400 rounded-md px-5 p-1 text-white'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
