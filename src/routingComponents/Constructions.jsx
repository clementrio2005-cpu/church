import React from "react";


import construction1 from "../assets/construction1.jpg";
import construction2 from "../assets/construction2.jpg";
import construction3 from "../assets/construction3.jpg";
import construction4 from "../assets/construction4.jpg";


const Constructions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide">
        Construction Updates
      </h1>

      {/* Image 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
          <img
            src={construction1}
            alt="Gallery 1"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>


         {/* Image 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
          <img
            src={construction2}
            alt="Gallery 2"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

        {/* Image 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
          <img
            src={construction3}
            alt="Gallery 3"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

        {/* Image 4 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
          <img
            src={construction4}
            alt="Gallery 4"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

        
      </div>
    
  );
};

export default Constructions;
