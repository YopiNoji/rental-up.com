import React, { ButtonHTMLAttributes } from "react";

interface PropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<PropTypes> = ({ label, ...props }) => {
  return (
    <div className="">
      <button
        {...props}
        className="block px-6 py-2 text-white bg-main-green rounded"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
