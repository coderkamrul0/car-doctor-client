/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-[#FF3811]">Services</h3>
        <h2 className="text-3xl font-bold">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className=" grid px-5 md:px-0 gap-8 md:grid-cols-3 my-8">
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
