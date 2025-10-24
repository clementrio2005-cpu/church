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
        My Photo Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8 max-w-6xl">
        {/* Image 1 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img src={construction1} alt="Gallery 1" className="w-full h-72 object-cover" />
        </div>

        {/* Image 2 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img src={construction2} alt="Gallery 2" className="w-full h-72 object-cover" />
        </div>

        {/* Image 3 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img src={construction3} alt="Gallery 3" className="w-full h-72 object-cover" />
        </div>

        {/* Image 4 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img src={construction4} alt="Gallery 4" className="w-full h-72 object-cover" />
        </div>

        
      </div>
    </div>
  );
};

export default Constructions;
