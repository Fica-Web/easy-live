import React from 'react'

const TitleHero = ({ title }) => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7'>
            <div className='w-full sm:h-[60vh] h-[50vh] bg-pink mt-3 rounded-3xl flex items-center justify-center'>
                <h2 className='lg:text-9xl sm:text-7xl text-5xl text-primary font-semiBold'>
                    { title }
                </h2>
            </div>
        </div>
    )
}

export default TitleHero
