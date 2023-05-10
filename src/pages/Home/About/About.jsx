/* eslint-disable no-unused-vars */
import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        
        <div className="container mx-auto flex  py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative ">
            
            <img
              className="object-cover object-center rounded h-[300px] w-[400px]"
              alt="hero"
              src={person}
            />
            <img className="w-[200px]  h-[200px] absolute right-[-35px] bottom-[-40px] " src={parts} alt="" />
            
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h4 className="text-[#FF3811] text-lg font-bold">About Us</h4>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="mb-8 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="mb-8 leading-relaxed">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <div className="flex justify-center">
            <button className="text-white border py-1 px-2 rounded border-[#FF3811] font-semibold hover:text-black bg-[#FF3811]">Get More Info</button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
