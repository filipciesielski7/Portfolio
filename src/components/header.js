import React, { useState } from "react";
import * as ROUTES from "../constants/routes";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);

  const changeHeaderBackground = () => {
    var navbar = document.getElementById("navbar");
    if (window.scrollY >= 1) {
      navbar.classList.add("navbar-shadow");
      setScrolled(true);
    } else {
      setScrolled(false);
      navbar.classList.remove("navbar-shadow");
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 150 && window.innerWidth < 992) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        if (!toggled) {
          document.getElementById("navbar").style.top = "-80px";
        } else {
          if (window.innerWidth < 768) {
            document.getElementById("navbar").style.top = "-216px";
          } else {
            document.getElementById("navbar").style.top = "-232px";
          }
        }
      }
    } else {
      document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Navbar
        id="navbar"
        collapseOnSelect
        expand="lg"
        bg={scrolled ? "light" : "dark"}
        variant={scrolled ? "light" : "dark"}
        className="p-lg-4 p-md-3"
        fixed="top"
        style={{ transition: "all 0.3s ease-out" }}
      >
        <Container>
          <Navbar.Toggle
            id="toggle"
            aria-controls="responsive-navbar-nav"
            className="ms-auto"
            style={{ outline: "none", boxShadow: "none", border: "none" }}
            onClick={() => setToggled(!toggled)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" id="vanbar-scroll">
              <Container>
                <Row className="justify-content-center">
                  <Col xs="auto" lg={4} xs={12}>
                    <Nav.Link
                      className="d-flex justify-content-center"
                      href="#about-me"
                    >
                      About
                    </Nav.Link>
                  </Col>
                  <Col xs="auto" lg={4} xs={12}>
                    <Nav.Link
                      className="d-flex justify-content-center"
                      href="#projects"
                    >
                      Projects
                    </Nav.Link>
                  </Col>
                  <Col xs="auto" lg={4} xs={12}>
                    <Nav.Link
                      className="d-flex justify-content-center"
                      href="#contact"
                    >
                      Contact
                    </Nav.Link>
                  </Col>
                </Row>
              </Container>

              <Container>
                <Row className="justify-content-center">
                  <Col xs="auto" lg={3}>
                    <Nav.Link href={ROUTES.GITHUB} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </Nav.Link>
                  </Col>
                  <Col xs="auto" lg={3}>
                    <Nav.Link href={ROUTES.LINKEDIN} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-linkedin my-20"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </Nav.Link>
                  </Col>
                  <Col xs="auto" lg={3}>
                    <Nav.Link href="#cv">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-file-earmark-arrow-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                      </svg>
                    </Nav.Link>
                  </Col>
                </Row>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
