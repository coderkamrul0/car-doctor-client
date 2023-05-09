/* eslint-disable no-unused-vars */
import React from "react";
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[400px] md:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full"
          />
          <div className="absolute h-full flex items-center transform gap-2 -translate-y-1/2   top-1/2   bg-gradient-to-r from-[#151515] to[rgba(21,21,21,0)]">
            <div className="text-white pl-12  space-y-5">
                <h2 className="text-5xl md:text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                <p>There are many variations of passages of <br />  available, but  the majority have suffered alteration in some form</p>
                <div className="flex gap-3">
                <button className="text-[white] border py-1 px-2 rounded bg-[#FF3811] border-[#FF3811] font-semibold ">Discover More</button>
                    <button className="text-[#FF3811] border py-1 px-2 rounded border-[#FF3811] font-semibold hover:text-black hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex transform gap-2 -translate-y-1/2  right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full"
          />
          <div className="absolute h-full flex items-center transform gap-2 -translate-y-1/2   top-1/2   bg-gradient-to-r from-[#151515] to[rgba(21,21,21,0)]">
            <div className="text-white pl-12  space-y-5">
                <h2 className="text-5xl md:text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                <p>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                <div className="flex gap-3">
                <button className="text-[white] border py-1 px-2 rounded bg-[#FF3811] border-[#FF3811] font-semibold ">Discover More</button>
                    <button className="text-[#FF3811] border py-1 px-2 rounded border-[#FF3811] font-semibold hover:text-black hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex transform gap-2 -translate-y-1/2  right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full"
          />
          <div className="absolute h-full flex items-center transform gap-2 -translate-y-1/2   top-1/2   bg-gradient-to-r from-[#151515] to[rgba(21,21,21,0)]">
            <div className="text-white pl-12  space-y-5">
                <h2 className="text-5xl md:text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                <p>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                <div className="flex gap-3">
                <button className="text-[white] border py-1 px-2 rounded bg-[#FF3811] border-[#FF3811] font-semibold ">Discover More</button>
                    <button className="text-[#FF3811] border py-1 px-2 rounded border-[#FF3811] font-semibold hover:text-black hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex transform gap-2 -translate-y-1/2  right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full"
          />
          <div className="absolute h-full flex items-center transform gap-2 -translate-y-1/2   top-1/2   bg-gradient-to-r from-[#151515] to[rgba(21,21,21,0)]">
            <div className="text-white pl-12  space-y-5">
                <h2 className="text-5xl md:text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                <p>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                <div className="flex gap-3">
                <button className="text-[white] border py-1 px-2 rounded bg-[#FF3811] border-[#FF3811] font-semibold ">Discover More</button>
                    <button className="text-[#FF3811] border py-1 px-2 rounded border-[#FF3811] font-semibold hover:text-black hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex transform gap-2 -translate-y-1/2  right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
