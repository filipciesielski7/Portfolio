import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <section id="about-me" className="bg-dark">
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
                  class="lead text-white text-lg-left text-justify mt-2"
                  lg={4}
                >
                  I'm computer science student, passionate about building
                  beautiful responsive websites using React. Also interested in
                  software engineering with the intention of becoming Full Stack
                  Developer.
                </p>
                <Fade bottom delay={300}>
                  <a
                    className="btn btn-light"
                    role="button"
                    download="CV.pdf"
                    href={process.env.PUBLIC_URL + "/static/CV.pdf"}
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
                alt=""
              />
            </Fade>

            <Fade top delay={500}>
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
                alt=""
              />
            </Fade>

            <Fade right delay={800}>
              <img
                className="icon icon--javascript"
                src={
                  process.env.PUBLIC_URL + "/images/technologies/javascript.png"
                }
                alt=""
              />
            </Fade>
            <Fade top delay={600}>
              <img
                className="icon icon--react"
                src={process.env.PUBLIC_URL + "/images/technologies/react.png"}
                alt=""
              />
            </Fade>

            <Fade bottom delay={700}>
              <img
                className="icon icon--sass"
                src={process.env.PUBLIC_URL + "/images/technologies/sass.png"}
                alt=""
              />
            </Fade>

            <Fade left delay={400}>
              <img
                className="icon icon--html"
                src={process.env.PUBLIC_URL + "/images/technologies/html.png"}
                alt=""
              />
            </Fade>

            <Fade bottom delay={400}>
              <img
                className="icon icon--java"
                src={process.env.PUBLIC_URL + "/images/technologies/java.png"}
                alt=""
              />
            </Fade>

            <Fade top delay={300}>
              <img
                className="icon icon--sql"
                src={process.env.PUBLIC_URL + "/images/technologies/sql.png"}
                alt=""
              />
            </Fade>

            <Fade top delay={800}>
              <img
                className="icon icon--git"
                src={process.env.PUBLIC_URL + "/images/technologies/git.png"}
                alt=""
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
