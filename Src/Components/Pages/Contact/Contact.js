import React from "react";

import NavigationBar from "../../Navbar/Navbar";

import bulma_css from "../../../Assets/CSS/Bulma/bulma.module.css"

function Contact() {
  return (
    <>
      <header>
        <NavigationBar active_contact="active" />
      </header>
      <section className={`${bulma_css.hero} ${bulma_css["is-fullheight"]}`}>
        <div className={bulma_css["hero-body"]}>
          <div className={`${bulma_css.container} ${bulma_css["has-text-centered"]}`}>
            <div
              className={`${bulma_css.columns} ${bulma_css["is-8"]} ${bulma_css["is-variable"]}`}
            >
              <div
                className={`${bulma_css.column} ${bulma_css["is-two-thirds"]} ${bulma_css["has-text-left"]}`}
              >
                <h1 className={`${bulma_css.title} ${bulma_css["is-1"]}`}>Contact Me</h1>
                <p className={bulma_css["is-size-4"]}>
                  Hey. If you want any new course, Or you have a new thing to
                  include in my site. So plz tell me.
                </p>
                <div className={bulma_css["social-media"]}>
                  <a
                    href="{% url 'Facebook_link' %}"
                    target="_blank"
                    className={`${bulma_css.button} ${bulma_css["is-light"]} ${bulma_css["is-large"]}`}
                  >
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className={`${bulma_css.button} ${bulma_css["is-light"]} ${bulma_css["is-large"]}`}
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="{% url 'Twitter_link' %}"
                    target="_blank"
                    className={`${bulma_css.button} ${bulma_css["is-light"]} ${bulma_css["is-large"]}`}
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div
                className={`${bulma_css.column} ${bulma_css["is-one-third"]} ${bulma_css["has-text-left"]}`}
              >
                <form method="POST">
                  <div className={bulma_css.field}>
                    <label className={bulma_css.label}>Name</label>
                    <div className={bulma_css.control}>
                      <input
                        className={`${bulma_css.input} ${bulma_css["is-medium"]}`}
                        name="name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={bulma_css.field}>
                    <label className={bulma_css.label}>Email</label>
                    <div className={bulma_css.control}>
                      <input
                        className={`${bulma_css.input} ${bulma_css["is-medium"]}`}
                        name="email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={bulma_css.field}>
                    <label className={bulma_css.label}>Message</label>
                    <div className={bulma_css.control}>
                      <textarea
                        className={`${bulma_css.textarea} ${bulma_css["is-medium"]}`}
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className={bulma_css.control}>
                    <button
                      type="submit"
                      className={`${bulma_css.button} ${bulma_css["is-link"]} ${bulma_css["is-fullwidth"]} ${bulma_css["has-text-weight-medium"]} ${bulma_css["is-medium"]}`}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
