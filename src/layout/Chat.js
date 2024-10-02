import React, { useState } from "react";
import adminicon from '../images/programmer.png'
import school from '../images/school.png'
import emoji from '../images/happy.png'
import telegram from '../images/telegram.png'
import '../style/style.css'


const ChatApp = () => {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Xin chào" },
    { sender: "user", text: "Làm thế nào để xem các sản phẩm" },
    { sender: "admin", text: "Chào bạn" },
    { sender: "admin", text: "Bạn có thể vào mục Shop để xem các sản phẩm" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <div className=" chatWindow flex flex-col max-w-sm mx-auto bg-gray-100 border rounded-lg shadow-lg fixed z-30 top-[30%] right-0 mr-[50px]">
      <div className=" text-white p-4 rounded-t-lg flex justify-between items-center">
        <h2 className="text-lg font-semibold text-black">Customer Support</h2>
        <p className="bg-gray-300 text-gray-500 p-1">Let's Chat App</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start mb-4 ${
              message.sender === "admin" ? "" : "flex-row-reverse"
            }`}
          >
            <span className="w-8 h-8 rounded-full overflow-hidden mr-2">
              {message.sender === "admin" ? (
                <img src={adminicon} alt="Admin Icon" />
              ) : ""
                
              }
            </span>
            <span
              className={`p-2 rounded-lg ${
                message.sender === "admin"
                  ? "bg-blue-200 text-right"
                  : "bg-gray-200"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 border-t">
      <img className="h-8 w-8" src={adminicon} alt="Admin Icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Message!"
          className="w-[50%] flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <img className="h-7 w-7 mx-2" src={school} alt="Admin Icon" />
        <img className="h-7 w-7 mx-2" src={emoji} alt="Admin Icon" />
        <img className="h-7 w-7 mx-2" src={telegram} alt="Admin Icon" />
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
