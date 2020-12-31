import React from "react";

import NavigationBar from "../../Navbar/Navbar";

import Card from "./Card";

import bulma_css from "../../../Assets/CSS/Bulma/bulma.module.css";

import Cards_Data from "../../../Data/Pages/Videos_Page_Card_Data";

import css from "../../../Assets/CSS/Pages/Videos/Videos.module.css"

function Videos() {
  return (
    <>
      <header>
        <NavigationBar active_videos="active" />
      </header>
      <section className={bulma_css.section}>
        <div className={`${bulma_css.container}`}>
          <div className={`${bulma_css.columns} ${css.con} ${bulma_css["is-multiline"]}`}>
            {Cards_Data.map((data) => (
              <Card
                id={data.id}
                link={data.link}
                img={data.img}
                author_img={data.author_img}
                author_link={data.author_link}
                author_name={data.author_name}
                author_desc={data.author_desc}
                name={data.name}
                desc={data.desc}
                date={data.date}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Videos;
