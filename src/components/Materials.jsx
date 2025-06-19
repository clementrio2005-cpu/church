import React, { useState } from "react";
import "../styles/Materials.css";
const Materials = () => {
  const [products, setProducts] = useState([
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
  ]);
  return (
    <section className="section-materials">
      <section className="section2-materials">
      <header>
      <h1 class="header-title">Materials For <span>Donation</span></h1>
    </header>
        <section className="table-content">
        <div class="description">
      <p>This document outlines materials needed for our community building project. Your generous donations will help us complete essential parts of the construction. Every contribution, regardless of size, brings us closer to our goal.</p>
    </div>
          <table class="materials-table">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr class="highlight">
                <td>1</td>
                <td>Inclusive Main Alter</td>
                <td>RS. 35,00,000/-</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Central Main Tower</td>
                <td>RS. 25,00,000/-</td>
              </tr>
              <tr class="highlight">
                <td>3</td>
                <td>Interior Granite-Laying</td>
                <td>RS. 20,00,000/-</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Two Side Towers(Per Tower)</td>
                <td>RS. 15,00,000/-</td>
              </tr>
              <tr class="highlight">
                <td>5</td>
                <td>Interior/Exterior Colour Washing</td>
                <td>RS. 15,00,000/-</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Acoustics Sound System</td>
                <td>RS. 5,00,000/-</td>
              </tr>
              <tr class="highlight">
                <td>7</td>
                <td>Main Head Door</td>
                <td>RS. 5,00,000/-</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Pulpit And Tabernacle</td>
                <td>RS. 3,00,000/-</td>
              </tr>
              <tr class="highlight">
                <td>9</td>
                <td>Electrical Works Installation</td>
                <td>RS. 3,00,000/-</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Side Doors (Nos.4)</td>
                <td>RS. 2,00,000/-</td>
              </tr>
              <tr class="highlight">
                <td>11</td>
                <td>Per Window (10 Nos)</td>
                <td>RS. 75,000/-</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Per Square Feet (Cost)</td>
                <td>RS. 3,800/-</td>
              </tr>
            </tbody>
          </table>
          {/* <table className="table-materials">
            <tr className="tr-table">
              <th>serial no</th>
              <th>product name</th>
              <th>price </th>
            </tr>
            {products.map((product) => (
              <tr>
                <td>{product.sno}</td>
                <td className="td-productname">{product.product}</td>
                <td className="td-productprice">{product.price}</td>
              </tr>
            ))}
          </table> */}
        </section>
      </section>
    </section>
  );
};

export default Materials;
