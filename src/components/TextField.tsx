import React from 'react';

type PropTypes ={
    label?: string
    require?: boolean
}

const TextField: React.FC<PropTypes> = ({label, require}) => {
  return (
    <>
        <div className="">
            <label className="block">
                <span className="text-deep-gray text-sm mr-2">{label}</span>
                {require && <span className="rounded bg-main-orange text-xs px-1">必須</span>}
            </label>
            <input type="text" className="block border border-light-gray shadow-inner rounded" />
        </div>
    </>
  );
};

export default TextField;
