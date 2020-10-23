import React, { InputHTMLAttributes } from "react";

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequire?: boolean;
  type?: string;
  hasError?: boolean;
  errorMessage?: string;
}

const TextField: React.FC<PropTypes> = ({
  label,
  isRequire,
  type,
  errorMessage,
  hasError = !!errorMessage,
  onChange,
  ...props
}) => {
  return (
    <div className="">
      <label className="block">
        <span className="text-deep-gray text-sm mr-2">{label}</span>
        {isRequire && (
          <span className="rounded bg-main-orange text-3xs font-bold px-1">
            必須
          </span>
        )}
        <input
          {...props}
          onChange={onChange}
          type={type || "text"}
          className={`block border shadow-inner rounded ${
            hasError ? "border-red-600" : "border-light-gray"
          }`}
        />
        <span className="text-red-600 text-xs">{errorMessage}</span>
      </label>
    </div>
  );
};

export default TextField;
