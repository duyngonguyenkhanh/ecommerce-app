import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { useData } from "../globalstate/Global";
import { useNavigation } from "../layout/useNavigation";

const ShopPage = () => {
  const handleNavigate = useNavigation();

  const { value } = useData();

  const [show, setShow] = useState({
    all: true,
    iphone: false,
    ipad: false,
    macbook: false,
    airpod: false,
    watch: false,
    mouse: false,
    keyboard: false,
    other: false,
  });

  const [category, setCategory] = useState(value.items); //state chứa giá trị khởi tạo là tất cả items

  //Hàm xử lý khi click vào 1 category hàm nhận type và setstate cho type đó thành true và lọc ra danh sách các item cùng type
  const handleClick = (type) => {
    setShow((prevState) => ({
      ...prevState,
      all: false,
      iphone: false,
      ipad: false,
      macbook: false,
      airpod: false,
      watch: false,
      mouse: false,
      keyboard: false,
      other: false,
      [type]: true,
    }));
    //kiểm tra type nếu là all thì setCategory = tất cả items và ngược lại lọc ra những item có chứa type nhận về
    if (type === "all") {
      setCategory(value.items);
    } else {
      const category = value.items.filter((item) => item.category === type);
      setCategory(category);
    }
  };

  const Banner = () => {
    return (
      <div className="italic bg-slate-200 flex items-center justify-between p-20">
        <p className="font-medium text-[50px]">SHOP</p>
        <p className="text-primary">SHOP</p>
      </div>
    );
  };

  const Silebar = () => {
    return (
      <div className="w-[40%] italic space-y-3">
        <p className="text-[30px] font-medium py-7">CATEGORIES</p>
        <p className="text-[15px] text-white bg-[#333] px-5 py-2">APPLE</p>
        <button
          className={`px-5 text-[15px] ${
            show.all ? `text-[#f3d8ac]` : ` text-black`
          }`}
          onClick={() => handleClick("all")}
        >
          All
        </button>
        <p className="font-medium bg-slate-200 px-5 py-2 text-[15px]">
          IPHONE & MAC
        </p>
        <div>
          <button
            className={`px-5 text-[15px] ${
              show.iphone ? `text-[#f3d8ac]` : ` text-black`
            }`}
            onClick={() => handleClick("iphone")}
          >
            Iphone
          </button>
        </div>
        <div>
          <button
            className={`px-5 text-[15px] ${
              show.ipad ? `text-[#f3d8ac]` : ` text-black`
            }`}
            onClick={() => handleClick("ipad")}
          >
            Ipad
          </button>
        </div>
        <div>
          <button
            className={`px-5 text-[15px] ${
              show.macbook ? `text-[#f3d8ac]` : ` text-black`
            }`}
            onClick={() => handleClick("macbook")}
          >
            Macbook
          </button>
        </div>
        <p className="font-medium bg-slate-200 px-5 py-2 text-[15px]">
          WIRELESS
        </p>
        <div>
          <button
            className={`px-5 text-[15px] ${
              show.airpod ? `text-[#f3d8ac]` : ` text-black`
            }`}
            onClick={() => handleClick("airpod")}
          >
            Airpod
          </button>
        </div>
        <div>
          <button
            className={`px-5 text-[15px] ${
              show.watch ? `text-[#f3d8ac]` : ` text-black`
            }`}
            onClick={() => handleClick("watch")}
          >
            Wacth
          </button>
        </div>
        <p className="font-medium bg-slate-200 px-5 py-2 text-[15px]">OTHER</p>
        <div>
          <button
            className={`px-5 text-[15px] ${
              show.mouse ? `text-[#f3d8ac]` : ` text-black`
            }`}
            onClick={() => handleClick("mouse")}
          >
            Mouse
          </button>
        </div>
        <div>
          <button
            className={`px-5 text-[15px] ${
              show.keyboard ? `text-[#f3d8ac]` : ` text-black`
            }`}
            onClick={() => handleClick("keyboard")}
          >
            Keyboard
          </button>
        </div>
        <div>
          <button
            className={`px-5 text-[15px] ${
              show.other ? `text-[#f3d8ac]` : ` text-black`
            }`}
            onClick={() => handleClick("other")}
          >
            Other
          </button>
        </div>
      </div>
    );
  };

  const ItemsList = () => {
    const handleClickItem = (id) => {
      handleNavigate(`detail/${id}`);
    };

    return (
      <div className="w-full space-x-7">
        <div className="flex justify-between py-8 ml-[5%]">
          <>
            <input
              className="border p-1 border-slate-200 h-[40px]"
              type="text"
              placeholder="Enter Search"
            />
          </>
          <>
            <select className="border border-black h-[25px]" name="" id="">
              <option value="">Default Sorting</option>
            </select>
          </>
        </div>
        <div className="grid grid-cols-3 max-h-[60%] gap-5 italic animation-container">
          {category.map((item, index) => (
            <div key={index} className="" onClick={() => handleClickItem(item._id.$oid)}>
              <img
                className="animate-slideInFadeIn transition-transform duration-500 transform hover:scale-110 animate-fadeIn"
                src={`${item.img1}`}
                alt=""
              />
              <p className="flex justify-center font-medium text-[17px] text-center">
                {item.name}
              </p>
              <p className="flex justify-center text-[#969292]">
                {Number(item.price).toLocaleString("vi-VN")} VNĐ
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="h-full w-[1300px] text">
        <Navbar />
        <Banner />
        <div className="flex">
          <Silebar />
          <ItemsList />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
