import React from "react";

const Button = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[steelblue] text-white transition ease-in-out delay-150 font-bold px-5 py-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
