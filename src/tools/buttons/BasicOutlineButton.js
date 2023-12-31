import React from "react";

const BasicOutlineButton = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-solid bg-green-200 font-bold border-[green] px-5 py-2 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default BasicOutlineButton;
