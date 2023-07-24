import React from "react";

const IconCoverButton = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[steelblue] text-white font-bold p-2 rounded-full cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default IconCoverButton;
