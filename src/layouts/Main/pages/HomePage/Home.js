import React from "react";
import HomeBanner from "./sections/HomeBanner";
import HomeImgBanner from "./sections/HomeImgBanner";
import HomeAccordian from "./sections/HomeAccordian";

const Home = () => {
  return (
    <div className="lg:px-20 px-2 py-5">
      <HomeImgBanner />
      <HomeBanner />
      <HomeAccordian />
    </div>
  );
};

export default Home;
