import React from "react";

const Button = ({ children, variant = "primary", onclick, ...props }) => {
  const base = "px-4 py-2 rounded font-medium";
  const variants = {
    primary: "w-full bg-black text-white hover:bg-zinc-800 cursor-pointer",
    secondary: "w-full hover:bg-zinc-800 cursor-pointer",
  };

  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onclick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
