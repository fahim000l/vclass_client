import React from "react";

const IconCoverButton = ({ className, children, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#179275] text-white font-bold p-2 rounded-full cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default IconCoverButton;
