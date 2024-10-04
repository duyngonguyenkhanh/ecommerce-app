import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import adminicon from "../images/programmer.png";
import school from "../images/school.png";
import emoji from "../images/happy.png";
import telegram from "../images/telegram.png";
import "../style/style.css";

// Kết nối tới server Socket.IO
let socket;

const ChatApp = () => {
  const currentUser = useSelector(state => state.auth || {}); // Lấy thông tin người dùng hiện tại
  const [messages, setMessages] = useState([]); // Lưu trữ danh sách tin nhắn
  const [input, setInput] = useState(""); // Nội dung tin nhắn hiện tại
  const [joinMessage, setJoinMessage] = useState(""); // Lưu thông báo tham gia phòng

  // Thiết lập kết nối socket khi component được mount
  useEffect(() => {
    // Khởi tạo socket khi component được mount
    socket = io("https://backend-ecommerce-cp5v.onrender.com");

    // Kiểm tra nếu currentUser tồn tại trước khi tham gia phòng
    if (currentUser.currentUser.userId) {
      // Tham gia phòng chat của người dùng dựa trên userId
      socket.emit("joinRoom", { roomId: currentUser.currentUser.userId, userId: currentUser.currentUser.userId });

      // Lắng nghe sự kiện "message" từ server
      socket.on("message", (data) => {
        // Chỉ cập nhật tin nhắn nếu nó không phải từ chính user
        if (data.userId !== currentUser.currentUser.userId) {
          setMessages((prevMessages) => [...prevMessages, data]); // Cập nhật danh sách tin nhắn
        }
      });

      // Lắng nghe thông báo tham gia phòng
      socket.on("joinRoomMessage", (message) => {
        setJoinMessage(message); // Cập nhật thông báo khi user tham gia phòng
      });
    }

    // Ngắt kết nối khi component bị unmount
    return () => {
      socket.disconnect(); // Ngắt kết nối socket khi component unmount
    };
  }, [currentUser]); // Chạy lại effect khi currentUser thay đổi

  // Hàm gửi tin nhắn
  const handleSendMessage = () => {
    if (input.trim() && currentUser.currentUser.userId) {
      const messageData = {
        roomId: currentUser.currentUser.userId, // Gửi tin nhắn trong phòng của user hiện tại
        message: input,
        userId: currentUser.currentUser.userId, // ID của người gửi
        sender: "user" // Ghi nhận người gửi là user
      };

      // Gửi tin nhắn đến server
      socket.emit("message", messageData);

      // Cập nhật tin nhắn phía client
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setInput(""); // Reset input sau khi gửi
    }
  };

  return (
    <div className="chatWindow flex flex-col max-w-sm mx-auto bg-gray-100 border rounded-lg shadow-lg fixed z-30 top-[30%] right-0 mr-[50px]">
      <div className="text-white p-4 rounded-t-lg flex justify-between items-center">
        <h2 className="text-lg font-semibold text-black">Customer Support</h2>
        <p className="bg-gray-300 text-sm text-gray-500 p-1">Let's Chat App</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Hiển thị thông báo khi tham gia phòng */}
        {joinMessage && <div className="text-center text-green-600 mb-2">{joinMessage}</div>}
        
        {/* Hiển thị tin nhắn */}
        {messages.map((message, index) => (
          <div key={index} className={`flex items-start mb-4 ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
            {message.sender === "user" ? null : ( // Chỉ hiển thị icon admin
              <span className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <img src={adminicon} alt="User Icon" />
              </span>
            )}
            <span className={`p-2 rounded-lg ${message.sender === "user" ? "bg-gray-200" : "bg-blue-200 text-right"}`}>
              {message.message}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Message!"
          className="w-[50%] flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <img className="h-7 w-7 mx-2" src={school} alt="School Icon" />
        <img className="h-7 w-7 mx-2" src={emoji} alt="Emoji Icon" />
        <img className="h-7 w-7 mx-2" src={telegram} alt="Telegram Icon" />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;


