import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  const isScrolled = () => {
    if (window.scrollY >= 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", isScrolled);

  return (
    <section
      id="about-me"
      className="content bg-dark d-relative d-flex flex-column justify-content-center align-items-center overflow-hidden py-1"
    >
      <Container className="px-lg-5">
        <Row>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Fade left>
              <Container>
                <Fade top delay={800}>
                  <h4 className="d-inline text-white" lg={4}>
                    My name is{" "}
                  </h4>
                </Fade>
                <Fade delay={1200}>
                  <h1 className="name">Filip Ciesielski</h1>
                </Fade>
                <p
                  className="lead text-white text-lg-left text-justify mt-2"
                  lg={4}
                >
                  {/* I'm a computer science student, passionate about building
                  beautiful responsive websites using React. Also interested in
                  software engineering with the intention of becoming Full Stack
                  Developer. */}
                  {/* I'm a junior cloud engineer at Transition Technologies PSC,
                  with a degree in computer science from Poznan University of
                  Technology. I'm passionate about designing and implementing
                  innovative cloud-based solutions using AWS, and have also
                  experience in web development.  */}
                  I'm a DevOps & Cloud Engineer at Transition Technologies PSC,
                  with a degree in computer science from Poznan University of
                  Technology. I'm passionate about designing and implementing
                  innovative cloud-based solutions using AWS, and have also
                  experience in web development. at
                </p>
                <Fade bottom delay={300}>
                  <a
                    className="btn btn-light btn--cv"
                    role="button"
                    download="CV_Filip_Ciesielski.pdf"
                    href={
                      process.env.PUBLIC_URL + "/static/CV_Filip_Ciesielski.pdf"
                    }
                  >
                    Download CV
                  </a>
                </Fade>
              </Container>
            </Fade>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center position-relative"
          >
            <Fade right delay={500}>
              <img
                className="macbook"
                src={process.env.PUBLIC_URL + "/images/macbook.png"}
                alt="macbook"
              />
            </Fade>

            <Fade top delay={550}>
              <img
                className="icon icon--css"
                src={process.env.PUBLIC_URL + "/images/technologies/css.png"}
                alt=""
              />
            </Fade>

            <Fade delay={800}>
              <img
                className="icon icon--bootstrap"
                src={
                  process.env.PUBLIC_URL + "/images/technologies/bootstrap.png"
                }
                alt="bootstrap"
              />
            </Fade>

            <Fade right delay={700}>
              <img
                className="icon icon--javascript"
                src={
                  process.env.PUBLIC_URL + "/images/technologies/javascript.svg"
                }
                alt="javascript"
              />
            </Fade>

            <Fade top delay={600}>
              <img
                className="icon icon--react"
                src={process.env.PUBLIC_URL + "/images/technologies/react.png"}
                alt="react"
              />
            </Fade>

            <Fade bottom delay={750}>
              <img
                className="icon icon--sass"
                src={process.env.PUBLIC_URL + "/images/technologies/sass.png"}
                alt="sass"
              />
            </Fade>

            <Fade left delay={400}>
              <img
                className="icon icon--html"
                src={process.env.PUBLIC_URL + "/images/technologies/html.png"}
                alt="html"
              />
            </Fade>

            <Fade bottom delay={450}>
              <img
                className="icon icon--java"
                src={process.env.PUBLIC_URL + "/images/technologies/java.png"}
                alt="java"
              />
            </Fade>

            <Fade top delay={300}>
              <img
                className="icon icon--sql"
                src={process.env.PUBLIC_URL + "/images/technologies/sql.png"}
                alt="sql"
              />
            </Fade>

            <Fade top delay={800}>
              <img
                className="icon icon--git"
                src={process.env.PUBLIC_URL + "/images/technologies/git.png"}
                alt="git"
              />
            </Fade>

            <Fade bottom delay={700}>
              <img
                className="icon icon--github"
                src={process.env.PUBLIC_URL + "/images/technologies/github.png"}
                alt="github"
              />
            </Fade>
          </Col>
        </Row>
      </Container>

      <a href="#projects" className={`scroll ${scrolled ? "d-none" : null}`}>
        <span></span>
      </a>
    </section>
  );
}
