import React from "react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Updates
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-5xl">
        {/* Image 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder 1"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder 2"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder 3"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder 4"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Optional Image 5 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder 5"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
