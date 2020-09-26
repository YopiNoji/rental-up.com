import React from 'react';

type PropTypes ={
    label?: string
}

const Button: React.FC<PropTypes> = ({label}) => {
  return (
    <>
        <div className="">
            <button className="block px-6 py-2 text-white bg-main-green rounded">{label}</button>
        </div>
    </>
  );
};

export default Button;
