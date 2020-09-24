import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="h-24 bg-deep-gray text-white">
        <div className="flex">
            <a>借上社宅とは</a>
            <a>メリット</a>
            <a>削減コスト</a>
            <a>特徴</a>
        </div>
        <div className="flex">
            <a>プライバシーポリシー</a>
            <a>利用規約</a>
            <a>運営会社</a>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-items-center">
            <p>LOGO</p>
            <p>Copyright © Crowl Co., Ltd. All Rights Reserved.</p>
        </div>
    </div>
  );
};

export default Header;
