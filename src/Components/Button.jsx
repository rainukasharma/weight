import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Button = ({ to, icon, children, isSelected, onClick, className}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const buttonClasses = `p-3 mr-5 flex items-left flex-row mb-4 rounded-lg w-full hover:bg-[#6759FF] hover:text-white ${
    isSelected ? "bg-[#6759FF] text-white" : "text-black bg-transparent"
  } ${className}`;
  return (
    <div className={buttonClasses} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className={className} />
      <button className={`ml-4 ${className || ""}`}>
        <Link to={to}>{children}</Link>
      </button>
    </div>
  );
};

export default Button;
