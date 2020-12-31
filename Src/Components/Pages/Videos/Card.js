import React from "react";
import { Link } from "react-router-dom";

import css from "../../../Assets/CSS/Pages/Videos/Cards.module.css";

import bulma_css from "../../../Assets/CSS/Bulma/bulma.module.css"

function Card(props) {
  return (
    <div
      className={`${bulma_css.card} ${bulma_css.large} ${css["card"]}`}
    >
      <div className={css["card-image"]}>
        <figure className={`${bulma_css.image} ${bulma_css["is-5by4"]}`}>
          <Link to={props.link}>
            <img src={props.img} alt="Videos Card Image" />
          </Link>
        </figure>
      </div>
      <div className={bulma_css["card-content"]}>
        <div
          className={`${bulma_css.media} ${bulma_css["is-flex"]} ${bulma_css["is-flex-direction-column"]}`}
        >
          <div className={bulma_css["media-left"]}>
            <figure className={`${bulma_css.image} ${bulma_css["is-48x48"]}`}>
              <img
                src={props.author_img}
                alt="Videos Card Author Image"
                style={{ borderRadius: "50%" }}
              />
            </figure>
          </div>

          <div className={bulma_css["media-content"]}>
            <p
              className={`${bulma_css.title} ${bulma_css["is-5"]} ${bulma_css["no-padding"]}`}
            >
              <Link to={props.author_link}>{props.author_name}</Link>
            </p>
            <p className={`${bulma_css.subtitle} ${bulma_css["is-6"]}`}>
              {props.author_desc}
            </p>
          </div>
        </div>
        <div className={bulma_css.content}>
          <h1 className={`${bulma_css.title} ${bulma_css["is-5"]}`}>
            {props.name}
          </h1>
          <p>{props.desc}</p>
          <time>{props.date}</time>
          <br />
          <Link to={props.link}>Start Watching &gt;&gt; </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
