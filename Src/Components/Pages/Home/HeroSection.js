import React from "react";

import css from "../../../Assets/CSS/Pages/Home/HeroSections.module.css";

import Cards from "./Card";

function HeroSection({ title1, title2 }) {
  return (
    <>
      <section className={css.HeroSection}>
        <video
          className={css.video}
          src="/static/Videos/video-2.mp4"
          autoPlay
          loop
          muted
        />
        <h2>{title1}</h2>
        <h4>{title2}</h4>
      </section>
      <Cards />
    </>
  );
}

export default HeroSection;
