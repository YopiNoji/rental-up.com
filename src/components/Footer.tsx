import React from "react";

const Header: React.FC = () => {
  return (
    <div className="h-24 bg-deep-gray text-white py-2 px-4">
      <img width="80px" src="assets/company_logo.svg" alt="company logo" />
      <p className="text-sm">
        Copyright © Crowl Co., Ltd. All Rights Reserved.
      </p>
    </div>
  );
};

export default Header;
