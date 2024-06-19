import React from 'react';

const BillingDetails = () => {
  return (
<div className="container mx-auto ">
    <form className="bg-white pr-7 italic">
        <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-500 mb-2">FULL NAME:</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter Your Full Name Here!" className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500 mb-2">EMAIL:</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email Here!" className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
        </div>
        <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-500 mb-2">PHONE NUMBER:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter Your Phone Number Here!" className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
        </div>
        <div className="mb-6">
            <label htmlFor="address" className="block text-gray-500 mb-2">ADDRESS:</label>
            <input type="text" id="address" name="address" placeholder="Enter Your Address Here!" className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
        </div>
        <button type="submit" className="w-[20%] bg-[#333335] text-white py-2 hover:bg-primary">Place order</button>
    </form>
</div>
  );
};

export default BillingDetails;