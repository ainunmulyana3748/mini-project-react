import React from "react";

const Button = ({
  children,
  variant = "primary",
  onclick,
  disabled,
  ...props
}) => {
  const base = "px-4 py-2 rounded font-medium";
  const variants = {
    primary:
      "bg-black text-white hover:bg-zinc-900 focus:ring-black disabled:opacity-50 cursor-pointer",
    secondary:
      "bg-white text-black border border-gray-300 hover:bg-gray-100 focus:ring-gray-400 disabled:opacity-50 cursor-pointer",
  };

  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
      onClick={onclick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
