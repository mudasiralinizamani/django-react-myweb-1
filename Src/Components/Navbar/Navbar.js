import React, { useState } from "react";

import { Link } from "react-router-dom";

import style_css from "../../Assets/CSS/Navbar/Navbar.module.css";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className={style_css.navbar}>
        <h1 className={style_css["navbar-logo"]}>
          Tech MUD <i className="fab fa-react" />
        </h1>
        <div className={style_css["hamburger"]} onClick={handleClick}>
          <i
            className={
              click
                ? `fas fa-times ${style_css["fa-times"]}`
                : `fas fa-bars ${style_css["fa-bars"]}`
            }
          />
        </div>
        <ul
          className={
            click
              ? `${style_css["navbar-menu"]} ${style_css["active"]}`
              : style_css["navbar-menu"]
          }
        >
          <li>
            <Link
              className={`${style_css["nav-links"]} ${
                style_css[props.active_home]
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${style_css["nav-links"]} ${
                style_css[props.active_courses]
              }`}
              to="/courses/"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              className={`${style_css["nav-links"]} ${
                style_css[props.active_videos]
              }`}
              to="/videos/"
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              className={`${style_css["nav-links"]} ${
                style_css[props.active_blogs]
              }`}
              to="/blogs/"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={`${style_css["nav-links"]} ${
                style_css[props.active_about]
              }`}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${style_css["nav-links"]} ${
                style_css[props.active_contact]
              }`}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
