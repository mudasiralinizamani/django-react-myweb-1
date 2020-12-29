import React from "react";

import NavigationBar from "../../Navbar/Navbar";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <>
      <header>
        <NavigationBar active_home="active" />
      </header>
      <HeroSection title1="Explore Programming" title2="& technology" />
    </>
  );
}

export default Home;
