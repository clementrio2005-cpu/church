import React, { useEffect, useState } from "react";
import ImageSlider from './ImageSlider'
import { Link } from "react-router-dom";
const Intropage = () => {
  const [image, setImage] = useState(false);

  return (
    <section className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 w-full h-[85vh] md:h-[75vh]  ">
      <div className=" h-full flex flex-col justify-center ms-7 gap-4">
        <h2 className=" text-4xl font-bold font-sans tracking-wide text-gray-700">
          Church of ST.Joseph <span className="block">The Worker</span>
        </h2>
        <p className="">
           A community of faith where hearts unite to praise and worship God. Join us in our journey of spiritual growth, fellowship, and service to others.



         </p>
         <div className="flex gap-8 text-sm md:text-lg">
            <Link to={"/about"} className="border-2 rounded p-2 bg-green text-white hover:bg-transparent hover:text-green cursor-pointer">Read More</Link>
            <Link to={"/contact"} className="text-green font-bol border-2 p-2 rounded cursor-pointer hover:bg-green hover:text-white">Join Us</Link>
         </div>
      </div>
      <div className=" grid place-items-center ">
        <div>
          <ImageSlider/>
        </div>
      </div>
    </section>

  );
};

export default Intropage;
