import React from "react";

const Footer = () => {
  return (
    <div className="item-center bg-[#111111] px-[20%]  py-[5%]">
      <div className="flex space-x-[200px] justify-center text-[#ffff] italic ">
        <div>
          <h1 className="text-xl mb-5">CUSTOMER SERVICES</h1>
          <div className="space-y-3">
            <p>Help & Contact Us</p>
            <p>Return & Refunds</p>
            <p>Online Store</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-5">COMPANY</h1>
          <div className="space-y-3">
            <p>What We Do</p>
            <p>Availbble Service</p>
            <p>Latest Posts</p>
            <p>FAQs</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-5">SOCIAL MEDIA</h1>
          <div className="space-y-3">
            <p>Twiter</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Pinterest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
