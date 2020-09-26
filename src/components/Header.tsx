import React from 'react';

const Header: React.FC = () => {
  return (
    <>
    <div className="flex h-12 shadow">
      <div className="flex-1 justify-start m-2">
          <h1 className="text-main-green font-bold text-2xl">借上社宅.com</h1>
      </div>
      <div className="text-deep-gray justify-end py-2">
          <a href="#about">
            <p className="text-xs m-2">借上社宅とは？</p>
          </a>
      </div>
      <div className="text-deep-gray justify-end py-2">
          <a href="#merit">
            <p className="text-xs m-2">メリット</p>
          </a>
      </div>
      <div className="text-deep-gray justify-end py-2">
          <a href="#feature">
            <p className="text-xs m-2">特徴</p>
          </a>
      </div>
      <div className="bg-main-green text-white justify-end p-2 ml-2">
          <a href="#register">
            <p className="text-sm m-1">ユーザー登録</p>
          </a>
      </div>
    </div>
  </>
  );
};

export default Header;
