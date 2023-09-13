import React from "react";
import ProfileImg from "../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="logo text-2xl font-bold">Knowladge cafe</div>
      <div className="profile">
        <img src={ProfileImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
