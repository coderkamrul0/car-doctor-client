/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
    const {_id,title,img,price} = service;
    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full p-4  h-56 object-cover object-center"
            src={img}
            alt="Product image"
          />
          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-gray-900 font-bold text-2xl mb-2">
                {title}
              </h2>
              <p className="text-[#FF3811] font-bold text-base"> Price: $ {price}</p>
            </div>
                <Link to={`/checkout/${_id}`}>
                    <button className='text-[#ff3811] font-bold border p-1'>
                      Book Now
                    {/* Book Now< FaArrowRight className="text-[#FF3811]"/> */}
                    </button>
                </Link>
          </div>
        </div>
        </div>
    );
};

export default ServiceCard;