import React from "react";

import upcomingVideo from "../assets/eventVideo/church-upcoming.mp4";

export const Events = () => {
  return (
    <section>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src={upcomingVideo} type="video/mp4" />
      </video>
    </section>
  );
};
