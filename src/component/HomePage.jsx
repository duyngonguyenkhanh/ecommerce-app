import React from "react";
import Navbar from "../layout/Navbar";
import Collection from "../layout/Collection";
import Banner from "../layout/Banner";
import Footer from "../layout/Footer";
import { useData } from "../globalstate/Global";
import Items from "../product/Items";

const HomePage = () => {
  const { value } = useData();

  return (
    <div>
      <div className="flex justify-center">
        <div className=" w-[1000px] h-full">
          <Navbar />
          <Banner />
          <Collection />
          <Items items={value.items} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
