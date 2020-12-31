import React from "react";

import NavigationBar from "../../Navbar/Navbar";

import css from "../../../Assets/CSS/Pages/About.module.css"
import bulma_css from "../../../Assets/CSS/Bulma/bulma.module.css"

function About() {
  return (
    <>
      <header>
        <NavigationBar active_about="active" />
      </header>
      <section
        className={`${bulma_css.hero} ${bulma_css["is-link"]} ${bulma_css["is-fullheight"]} ${bulma_css["is-fullheight-with-navbar"]}`}
      >
        <div className={bulma_css["hero-body"]}>
          <div className={bulma_css.container}>
            Hello! I am
            <h1 className={`${bulma_css.title} ${bulma_css["is-1"]}`}>Mudasir Ali</h1>
            <h1 className={`${bulma_css.subtitle} ${bulma_css["is-3"]}`}>
              Full Stack Developer
            </h1>
          </div>
        </div>
      </section>
      <section className={bulma_css.section} id="about">
        <div
          className={`${bulma_css["section-heading"]} ${css["section-heading"]}`}
        >
          <h3 className={`${bulma_css.title} ${bulma_css["is-2"]}`}>About ME</h3>
          <div className={bulma_css.container}>
            <p>
              Hi, my name is Mudasir Ali. Web developer with more than
              <strong> 2 years</strong>. <strong>and Software Developer</strong>
              , extensive knowledge of modern Web techniques and love for
              <strong>Coffee</strong>. Looking for an opportunity to work and
              upgrade, as well as being involved in an organization that
              believes in gaining a competitive edge and giving back to the
              community.
            </p>
          </div>
        </div>

        <div
          className={`${bulma_css.columns} ${bulma_css["has-same-height"]} ${bulma_css["is-gapless"]}`}
        >
          <div className={bulma_css.column}>
            {/* <!-- Profile --> */}
            <div className={bulma_css.card}>
              <div className={bulma_css["card-content"]}>
                <h3 className={`${bulma_css.title} ${bulma_css["is-4"]}`}>Profile</h3>

                <div className={bulma_css.content}>
                  <table className={bulma_css["table-profile"]}>
                    <tr>
                      <th colspan="1"></th>
                      <th colspan="2"></th>
                    </tr>
                    <tr>
                      <td>Name:</td>
                      <td>Mudasir Ali Nizamani</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>+92 3421399683</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>mudasiralinizamani@gmail.com</td>
                    </tr>
                  </table>
                </div>
                <br />
                <div
                  className={`${bulma_css.buttons} ${bulma_css["has-addons"]} ${bulma_css["is-centered"]}`}
                >
                  <a
                    href="{% url 'Github_link' %}"
                    target="_blank"
                    className={`${bulma_css.button} ${bulma_css["is-link"]}`}
                  >
                    Github
                  </a>
                  <a
                    href="{% url 'Linkedin_link' %}"
                    target="_blank"
                    className={`${bulma_css.button} ${bulma_css["is-link"]}`}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="{% url 'Twitter_link' %}"
                    target="_blank"
                    className={`${bulma_css.button} ${bulma_css["is-link"]}`}
                  >
                    Twitter
                  </a>
                  <a
                    href="{% url 'Fiver_link' %}"
                    target="_blank"
                    className={`${bulma_css.button} ${bulma_css["is-link"]}`}
                  >
                    HireME
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={bulma_css.column}>
            {/* <!-- Profile picture --> */}
            <div className={bulma_css.card}>
              <div className={bulma_css["card-image"]}>
                <figure className={`${bulma_css.image} ${bulma_css["is-4by3"]}`}>
                  <img src="/static/PICS/my-pic.jpg" alt="My image" />
                </figure>
              </div>
            </div>
          </div>
          <div className={bulma_css.column}>
            {/* <!-- Skills --> */}
            <div className={bulma_css.card}>
              <div
                className={`${bulma_css["card-content"]} ${css["skills-content"]}`}
              >
                <h3 className={`${bulma_css.title} ${bulma_css["is-4"]}`}>Skills</h3>
                <div className={bulma_css.content}>
                  <article
                    className={`${bulma_css.media} ${css["skills-content-media"]}`}
                  >
                    <div className={bulma_css["media-content"]}>
                      <div className={bulma_css.content}>
                        <p>
                          <strong>Python:</strong>
                          <br />
                          <progress
                            className={`${bulma_css.progress} ${bulma_css["is-primary"]}`}
                            style={{ height: "8px" }}
                            value="80"
                            max="100"
                          ></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className={`${bulma_css.media} ${css["skills-content-media"]}`}
                  >
                    <div className={bulma_css["media-content"]}>
                      <div className={bulma_css.content}>
                        <p>
                          <strong>Django:</strong>
                          <br />
                          <progress
                            className={`${bulma_css.progress} ${bulma_css["is-primary"]}`}
                            style={{ height: "8px" }}
                            value="75"
                            max="100"
                          ></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className={`${bulma_css.media} ${css["skills-content-media"]}`}
                  >
                    <div className={bulma_css["media-content"]}>
                      <div className={bulma_css.content}>
                        <p>
                          <strong>HTML5/CSS3</strong>
                          <br />
                          <progress
                            className={`${bulma_css.progress} ${bulma_css["is-primary"]}`}
                            style={{ height: "8px" }}
                            value="85"
                            max="100"
                          ></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className={`${bulma_css.media} ${css["skills-content-media"]}`}
                  >
                    <div className={bulma_css["media-content"]}>
                      <div className={bulma_css.content}>
                        <p>
                          <strong>React:</strong>
                          <br />
                          <progress
                            className={`${bulma_css.progress} ${bulma_css["is-primary"]}`}
                            style={{ height: "8px" }}
                            value="60"
                            max="100"
                          ></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className={`${bulma_css.media} ${css["skills-content-media"]}`}
                  >
                    <div className={bulma_css["media-content"]}>
                      <div className={bulma_css.content}>
                        <p>
                          <strong>Nodejs:</strong>
                          <br />
                          <progress
                            className={`${bulma_css.progress} ${bulma_css["is-primary"]}`}
                            style={{ height: "8px" }}
                            value="48"
                            max="100"
                          ></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    classNameName={`${bulma_css.media} ${css["skills-content-media"]}`}
                  >
                    <div className={bulma_css["media-content"]}>
                      <div className={bulma_css.content}>
                        <p>
                          <strong>KivyMD:</strong>
                          <br />
                          <progress
                            className={`${bulma_css.progress} ${bulma_css["is-primary"]}`}
                            style={{ height: "8px" }}
                            value="59"
                            max="100"
                          ></progress>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Skills tags --> */}
      <br />
      <div className={`${bulma_css.tags} ${css["custom-tags"]}`}>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>Django</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>HTML5</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>bulma_css</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>Python</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>React</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>JavaScript</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>CSS3</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>Bootstrap</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>Nodejs</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>jQuery</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>SCSS</span>
        <span className={`${bulma_css.tag} ${bulma_css["is-light"]}`}>Git</span>
      </div>

      {/* <!-- Services --> */}
      <section className={bulma_css.section} id="services">
        <div className={css["section-heading"]}>
          <h3 className={`${bulma_css.title} ${bulma_css["is-"]}`}>Services</h3>
          <h4 className={`${bulma_css.subtitle} ${bulma_css["is-5"]}`}>
            What can I do for you?
          </h4>
        </div>
        <div className={bulma_css.container}>
          <div className={bulma_css.columns}>
            <div className={bulma_css.column}>
              <div className={bulma_css.box}>
                <div className={bulma_css.content}>
                  <h4 className={`${bulma_css.title} ${bulma_css["is-5"]}`}>
                    Front End Web Development
                  </h4>
                  Develop Front End using latest standards with HTML5/CSS3 with
                  added functionality using React.
                </div>
              </div>
            </div>
            <div className={bulma_css.column}>
              <div className={bulma_css.box}>
                <div className={bulma_css.content}>
                  <h4 className={`${bulma_css.title} ${bulma_css["is-5"]}`}>
                    Back End Web Development
                  </h4>
                  Develop Back End application/service using Django.
                </div>
              </div>
            </div>
          </div>

          <div className={bulma_css.columns}>
            <div className={bulma_css.column}>
              <div className={bulma_css.box}>
                <div className={bulma_css.content}>
                  <h4 className={`${bulma_css.title} ${bulma_css["is-5"]}`}>
                    Full Stack Web Development
                  </h4>
                  Develop a Full Stack Website with Django and React.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Resume --> */}
      <section className={bulma_css.section} id="resume">
        <div className={css["section-heading"]}>
          <h3 className={`${bulma_css.title} ${bulma_css["is-2"]}`}>Resume</h3>
          <h4 className={`${bulma_css.subtitle} ${bulma_css["is-5"]}`}>
            More about my past
          </h4>
          <a
            href="{% static 'Downloads/Resume.docx' %}"
            download
            className={`${bulma_css.button} ${bulma_css["is-link"]} ${bulma_css["is-medium"]}`}
          >
            <span className={bulma_css.icon}>
              <i className="fas fa-file-alt"></i>
            </span>
            <span>Download My Resume</span>
          </a>
        </div>
      </section>

      {/* <!-- Portfolio --> */}
      <section className={bulma_css.section} id="portfolio">
        <div className={bulma_css.container}>
          <div className={css["section-heading"]}>
            <h3 className={`${bulma_css.title} ${bulma_css["is-2"]}`}>Portfolio</h3>
            <h4 className={`${bulma_css.subtitle} ${bulma_css["is-5"]}`}>
              My latest works
            </h4>
          </div>
          <br />

          <div
            className={`${bulma_css.container} ${css["portfolio-container"]}`}
          >
            <div className={bulma_css.columns}>
              <div className={`${bulma_css.column} ${bulma_css["is-4"]}`}>
                {/* <!-- admin --> */}
                <div className={bulma_css.card}>
                  <header className={bulma_css["card-header"]}>
                    <p className={bulma_css["card-header-title"]}>
                      <span>
                        SMS<small>(Subject Management System)</small>
                      </span>
                      <span className={bulma_css["is-pulled-right"]}>
                        <a>
                          <span
                            className={`${bulma_css.tag} ${bulma_css["is-default"]}`}
                          >
                            v0.7
                          </span>
                        </a>
                        <span className={`${bulma_css.tag} ${bulma_css["is-default"]}`}>
                          Desktop Software
                        </span>
                        <span className={`${bulma_css.tag} ${bulma_css["is-danger"]}`}>
                          WIP
                        </span>
                      </span>
                    </p>
                  </header>
                  <div className={bulma_css["card-content"]}>
                    <figure className={bulma_css.image}>
                      <img src="../images/admin.png" alt="SMS Pic" />
                    </figure>
                  </div>
                  <footer className={bulma_css["card-footer"]}>
                    <a
                      href="https://github.com/mudasiralinizamani/SMS"
                      className={bulma_css["card-footer-item"]}
                      target="_blank"
                    >
                      Source Code
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Achievement Level --> */}
      {/* <section className="section">
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Tweets</p>
          <p className="title">3,456</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Following</p>
          <p className="title">123</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Followers</p>
          <p className="title">456K</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Likes</p>
          <p className="title">789</p>
        </div>
      </div>
    </nav>
  </section>  */}

      <section className={bulma_css.section} id="contact">
        <div className={bulma_css.container}>
          <div className={css["section-heading"]}>
            <h3 className={`${bulma_css.title} ${bulma_css["is-2"]}`}>Get in touch</h3>
            <a className={bulma_css["is-4"]} href="{% url 'Contact' %}">
              Go to Contact Page
            </a>
          </div>
          <br />
        </div>
      </section>
    </>
  );
}

export default About;
