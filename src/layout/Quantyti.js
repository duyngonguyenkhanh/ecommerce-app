import React from "react";

const Quantyti = ({decrease, increase, quantity}) => {
  return (
    <div className="flex items-center">
      <img
        onClick={decrease} // Truyền hàm giảm quantity vào component
        className="h-[9px]"
        src={require("../images/leftarrowicon.png")}
        alt=""
      />
      <p className="text-[18px] px-5">{quantity}</p>
      <img
        onClick={() => increase} // Truyền hàm tăng quantity vào component
        className="h-[9px]"
        src={require("../images/rightarrowicon.png")}
        alt=""
      />
    </div>
  );
};

export default Quantyti;
