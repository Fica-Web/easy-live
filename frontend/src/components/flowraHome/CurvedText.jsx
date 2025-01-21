import React from "react";

const CurvedText = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-white">
      <svg
        width="100%"
        height="200"
        viewBox="0 0 800 200"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-hidden"
      >
        {/* Define the curve path */}
        <path
          id="curve"
          d="M 50,150 C 200,50 600,50 750,150"
          fill="transparent"
          stroke="none"
        />

        {/* Add text along the curve */}
        <text fill="#E645BD" fontSize="24" fontWeight="bold">
          <textPath href="#curve" startOffset="0%">
            Flow Freely. Flow Sustainably Flow Freely. Flow Sustainably.Flow Freely. Flow Sustainably Flow Freely. Flow Sustainably.Flow Freely. Flow Sustainably Flow Freely. Flow Sustainably.Flow Freely. Flow Sustainably Flow Freely. Flow Sustainably
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedText;