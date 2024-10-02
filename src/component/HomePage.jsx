import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Collection from "../layout/Collection";
import Banner from "../layout/Banner";
import Footer from "../layout/Footer";
import Items from "../product/Items";
import ChatApp from "../layout/Chat";
import messenger from "../images/messenger.png"
import { useSelector } from "react-redux";

const HomePage = () => {
  const [showChat, setShowChat] = useState(false);

  //Nhận state
  const items = useSelector(state => state.product.res || []) 

  const handleclick = () => {
    setShowChat(!showChat)
  };


  return (
    <div>
      <div className="flex justify-center">
        <div className=" w-[1000px] h-full">
          <Navbar />
          <Banner />
          <Collection />
          <Items items={items} />
        </div>
      </div>
      {showChat &&  <ChatApp />}
      <img onClick={() => handleclick()} className="h-14 fixed z-50 top-[90%] right-0 mr-[100px]" src={messenger} alt="Admin Icon" />
      <Footer />
    </div>
  );
};

export default HomePage;
