import React from "react";
import { ChangeEvent } from "react";

type PropTypes = {
  label?: string;
  require?: boolean;
  type?: string;
  hasError?: boolean;
  errorMessage?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown;
};

const TextField: React.FC<PropTypes> = ({
  label,
  require,
  type,
  hasError,
  errorMessage,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange !== undefined ? onChange(event) : null;
  };
  hasError = hasError || !!errorMessage;
  return (
    <>
      <div className="">
        <label className="block">
          <span className="text-deep-gray text-sm mr-2">{label}</span>
          {require && (
            <span className="rounded bg-main-orange text-3xs font-bold px-1">
              必須
            </span>
          )}
          <input
            onChange={handleChange}
            type={type || "text"}
            className={`block border shadow-inner rounded ${
              hasError ? "border-red-600" : "border-light-gray"
            }`}
          />
          <span className="text-red-600 text-xs">{errorMessage}</span>
        </label>
      </div>
    </>
  );
};

export default TextField;
