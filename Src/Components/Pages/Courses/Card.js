import React from "react";
import { Link } from "react-router-dom";

import css from "../../../Assets/CSS/Pages/Courses/Card.module.css";
import Cards_data from "../../../Data/Pages/Courses_Cards_Data";

function Card() {
  return (
    <div className={css.cards}>
      <div className={css["cards__container"]}>
        <div className={css["cards__wrapper"]}>
          <ul className={css["cards__items"]}>
            {Cards_data.map((dt) => (
              <li className={css["cards__item"]}>
                <Link className={css["cards__item__link"]} to={dt.link}>
                  <figure
                    className={css["cards__item__pic-wrap"]}
                    data-category={dt.title}
                  >
                    <img
                      className={css["cards__item__img"]}
                      alt="Travel Image"
                      src={dt.img}
                    />
                  </figure>
                  <div className={css["cards__item__info"]}>
                    <h2 className={css["card-heading"]}>{dt.title}</h2>
                    <h5 className={css["cards__item__text"]}>{dt.desc}</h5>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
