import React, { useEffect, useState } from "react";
import church1 from "../assets/churchImg/oldChurch.jpg";
import church2 from "../assets/churchImg/newChurch3.jpg";
import "../styles/Intropage.css";
import { Link } from "react-router-dom";
const Intropage = () => {

    const [image,setImage] = useState(false)

   
    

  return (
    <section className="intropage-sec">
      <section className="section1-intro">
        <section className="content-sec">
          <h2 className="h2-intro">
            church of st.joseph <span className="worker">the worker</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis illo impedit pariatur alias ab vitae nam quae consectetur inventore, nulla quod ducimus voluptas voluptate expedita!
            
          </p>
          <button>
            <Link to="about">read more</Link>
          </button>
        </section>
      </section>
      <section className="section2-intro">
        <div className="div-figure-intro">
          {image ? (<figure>
            <span className="old-figure">old church</span>
            <img src={church1} alt="" className="imge-church1" />
          </figure>):
            (
              <figure>
                <span className="old-figure">new church</span>
                <img src={church2} alt="" className="imge-church1" />

              </figure>
            )
          }
        </div>
      </section>
    </section>
  );
};

export default Intropage;
