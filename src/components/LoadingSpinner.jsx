import React from "react";

const LoadingSpinner = () => {
  return (
    <span className="relative w-12 h-12 rounded-full border-4 border-white border-t-transparent animate-spin inline-block box-border">
      <span className="absolute inset-0 m-auto w-10 h-10 border-4 border-b-red-600 border-l-red-600 border-t-transparent border-r-transparent rounded-full animate-[spin_0.5s_linear_infinite]"></span>
      <span className="absolute inset-0 m-auto w-8 h-8 border-4 border-white border-t-transparent border-r-transparent rounded-full animate-[spin_1.5s_linear_infinite]"></span>
    </span>
  );
};

export default LoadingSpinner;
