import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact flex-column py-5 bg-dark">
      <Container className="px-lg-5 mb-5 form justify-content-center align-items-center">
        <Row className="mb-5">
          <Col className="px-5 mb-3 mt-lg-5 d-flex align-items-center justify-content-center">
            <Fade when={true} delay={300} triggerOnce={true}>
              <h3 className="d-inline text-light">contact{""}</h3>
              <h1 className="contact__title mx-2 mt-5">me</h1>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Container>
              <Row className="mb-3">
                <Col lg={6} xs={12} className="mb-3">
                  <Fade
                    direction="left"
                    when={true}
                    delay={100}
                    triggerOnce={true}
                  >
                    <a
                      href="mailto:filip.ciesielski@protonmail.com"
                      className="contact__link"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/helpers/mail.png"
                        }
                        alt=""
                        style={{ width: "35px", marginRight: "10px" }}
                      />{" "}
                      filip.ciesielski@protonmail.com
                    </a>
                  </Fade>
                </Col>
                <Col lg={6} xs={12} className="mb-3">
                  <Fade
                    direction="left"
                    when={true}
                    delay={300}
                    triggerOnce={true}
                  >
                    <a href="tel:+48 790 608 198" className="contact__link">
                      {" "}
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/helpers/phone.png"
                        }
                        alt=""
                        style={{ width: "30px", marginRight: "10px" }}
                      />{" "}
                      +48 790 608 198
                    </a>
                  </Fade>
                </Col>
              </Row>
              <Row>
                <Fade
                  direction="left"
                  when={true}
                  delay={500}
                  triggerOnce={true}
                >
                  <p className="lead text-secondary">
                    Got a question or proposal, or just want to say hello? Go
                    ahead.
                  </p>
                </Fade>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
