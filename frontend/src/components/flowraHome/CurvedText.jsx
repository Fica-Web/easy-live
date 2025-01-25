import React from "react";
import curvedText from '../../assets/images/curved-text.png'

const CurvedText = () => {
  return (
    <div className="w-full my-10 mb-20">
      <img 
        src={curvedText} 
        alt="Curved text image" 
        className="w-full object-cover lg:h-[320px] sm:h-[200px] h-[130px] 2xl:h-auto"
      />
    </div>
  );
};

export default CurvedText;