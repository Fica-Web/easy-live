import React from 'react';
import img1 from '../../assets/images/01.jpg';
import img2 from '../../assets/images/02.jpg';
import img3 from '../../assets/images/03.jpg';
import img4 from '../../assets/images/04.jpg';

const ImageGrid = () => {
    return (
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:-mt-10">
            <img 
                src={img1} 
                alt="Image 1" 
                className="object-cover w-full h-full  "
            />
            <img 
                src={img2} 
                alt="Image 2" 
                className="object-cover w-full h-full  "
            />
            <img 
                src={img3} 
                alt="Image 3" 
                className="object-cover w-full h-full  "
            />
            <img 
                src={img4} 
                alt="Image 4" 
                className="object-cover w-full h-full  "
            />
        </div>
    );
};

export default ImageGrid;