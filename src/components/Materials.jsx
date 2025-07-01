import React from "react";

const products = [
  {
    sno: 1,
    product: "inclusive main alter",
    price: "RS. 35,00,000/-",
  },
  {
    sno: 2,
    product: "central main tower",
    price: "RS. 25,00,000/-",
  },
  {
    sno: 3,
    product: "interior granite-laying",
    price: "RS. 20,00,000/-",
  },
  {
    sno: 4,
    product: "two side towers(per tower)",
    price: "RS. 15,00,000/-",
  },
  {
    sno: 5,
    product: "interior/exterior colour washing",
    price: "RS. 15,00,000/-",
  },
  {
    sno: 6,
    product: "acoustics sound system",
    price: "RS. 5,00,000/-",
  },
  {
    sno: 7,
    product: "main head door",
    price: "RS. 5,00,000/-",
  },
  {
    sno: 8,
    product: "pulpit and tubernacle",
    price: "RS. 3,00,000/-",
  },
  {
    sno: 9,
    product: "electrical works installation",
    price: "RS. 3,00,000/-",
  },
  {
    sno: 10,
    product: "side doors (nos.4)",
    price: "RS. 2,00,000/-",
  },
  {
    sno: 11,
    product: "per window (10 nos)",
    price: "RS. 75,000/-",
  },
  {
    sno: 12,
    product: "per square feet (cost)",
    price: "RS. 3,800/-",
  },
];

const Materials = () => {
  return (
    <section className="flex justify-center items-center bg-white w-full py-8 px-2 md:px-0">
      <section className="flex flex-col items-center gap-8 w-full max-w-5xl">
        <header className="text-center mb-6 relative">
          <h1 className="inline-block relative text-2xl md:text-4xl font-bold mb-2">
            Materials For <span className="text-green-900">Donation</span>
            <span className="block absolute left-1/2 -translate-x-1/2 -bottom-2 w-24 h-1 rounded bg-yellow-400"></span>
          </h1>
        </header>
        <section className="flex flex-col items-center w-full gap-4">
          <div className="relative bg-white p-4 md:p-8 rounded-lg shadow w-full md:w-4/5 mb-4 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-900 rounded-l"></div>
            <p className="relative z-10 text-gray-700 text-base md:text-lg">
              This document outlines materials needed for our community building project. Your generous donations will help us complete essential parts of the construction. Every contribution, regardless of size, brings us closer to our goal.
            </p>
          </div>
          <div className="overflow-x-auto w-full flex justify-center">
            <table className="w-full md:w-4/5 border-separate border-spacing-y-3">
              <thead>
                <tr className="bg-green-900 text-white">
                  <th className="py-3 px-2 text-left font-semibold rounded-tl-lg rounded-bl-lg">Serial No</th>
                  <th className="py-3 px-2 text-left font-semibold">Product Name</th>
                  <th className="py-3 px-2 text-right font-semibold rounded-tr-lg rounded-br-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, idx) => (
                  <tr
                    key={item.sno}
                    className={`bg-white shadow transition-transform duration-200 ${
                      idx % 2 === 0 ? "bg-green-50" : ""
                    } hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <td className="py-3 px-2 border-l border-t border-b border-gray-200 rounded-l-lg text-center font-bold text-green-800 capitalize">
                      {item.sno}
                    </td>
                    <td className="py-3 px-2 border-t border-b border-gray-200 capitalize">
                      {item.product}
                    </td>
                    <td className="py-3 px-2 border-r border-t border-b border-gray-200 rounded-r-lg text-right font-bold">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Materials;
