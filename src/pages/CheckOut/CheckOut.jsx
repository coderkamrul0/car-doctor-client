// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();

  return (
    <div className="py-10">
      <h2>Book Service: {service.title}</h2>

      <div className="bg-[#F3F3F3]">
        <div className="md:w-3/4 mx-auto">
          <form className=" rounded px-8 py-10 md:py-20 mb-4">
            <div className="md:flex gap-5 mb-4">
              <div className=" md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="md:flex gap-5 mb-4">
              <div className="md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="md:w-1/2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="8"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#FF3811] w-full hover:bg-[#b63514] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Order Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
