import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="h-24 bg-deep-gray text-white p-2">
      <img height="40px" src="assets/company_logo.svg" alt="company_logo"/>
      <p className="text-sm">Copyright © Crowl Co., Ltd. All Rights Reserved.</p>
    </div>
  );
};

export default Header;
