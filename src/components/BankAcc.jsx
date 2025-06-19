import React from "react";
import "../styles/BankAcc.css";
import QRCode from "../assets/qrCode.png";
const BankAcc = () => {
  return (
    <section className="bankacc-details">
      <section className="section2-bank">
        <header>
          <h1>bank account <span className="details-span-bank">details</span> </h1>
        <div className="span-for-line-bank"></div>
          
        </header>
        <section className="acc-section">
          <div className="container-acc-left">
            <div className="p-bank">
              <p>A/C name:</p>
              <p>parish prist</p>
            </div>
            <div className="p-bank">
              <p>A/C No:</p>
              <p>528100140450005</p>
            </div>
            <div className="p-bank">
              <p>bank name:</p>
              <p>tamilnadu mercentile bank limited.,</p>
            </div>
            <div className="p-bank">
              <p>IFSC code:</p>
              <p>TMBL0000019</p>
            </div>
            <div className="p-bank">
              <p>branch:</p>
              <p>kattur, trichy -620190.</p>
            </div>
          </div>
          <div className="container-acc-right">
            <figure>
              <img src={QRCode} alt="" />
              <p>QR Code to pay</p>
            </figure>
          </div>
        </section>
      </section>
    </section>
  );
};

export default BankAcc;
