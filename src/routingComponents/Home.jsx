import React from "react";
import Intropage from "../components/Intropage";
import CFather from "../components/CFather";
import C2father from "../components/C2father";
import C3father from "../components/C3father";

import WelcomeBanner from "../components/ui/WelcomeBanner"
const Home = () => {
  return (
    <section className="section-header">
      <Intropage />
      <WelcomeBanner/>
       <CFather />
      <C2father />
      <C3father />
    </section>
  );
};

export default Home;
