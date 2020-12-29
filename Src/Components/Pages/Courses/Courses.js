import React from "react";

import NavigationBar from "../../Navbar/Navbar";

import css from "../../../Assets/CSS/Pages/Courses/Courses.module.css";

import Cards from "./Card";

function Courses() {
  return (
    <div>
      <header>
        <NavigationBar active_courses="active" />
      </header>
      <section className={css.sec}>
        <Cards />
      </section>
    </div>
  );
}

export default Courses;
