import React from 'react'

const PageTitle = ({ title }) => {
    return (
        <div className='w-11/12 mx-auto sm:px-4 lg:px-7 my-20'>
            <h2 className='lg:text-9xl sm:text-7xl text-5xl text-easy-secondary font-semiBold text-center px-4 py-2 rounded-lg'>
                { title }
            </h2>
        </div>
    )
}

export default PageTitle
