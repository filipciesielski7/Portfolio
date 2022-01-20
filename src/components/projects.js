import React from "react";
import * as ROUTES from "../constants/routes";
import { Col, Container, Row } from "react-bootstrap";
import { projects } from "../data/projects";
import Project from "./project";

export default function Projects() {
  return (
    <section
      className="flex-column py-5"
      id="projects"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <Container className="mb-5">
        <Row>
          {projects.slice(0, 6).map((project, index) => {
            const { name, description, github, link, technologies } = project;
            return (
              <Col key={index} lg={6} xs={12} className="mb-lg-5">
                <Project
                  key={index}
                  name={name}
                  description={description}
                  technologies={technologies}
                  github={github}
                  link={link}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <a
        className="btn btn-dark my-3 d-flex justify-content-center align-items-center p-2"
        href={ROUTES.GITHUB}
        target="_blank"
        rel="noreferrer"
      >
        Check out more projects!
        {/* <img
          className="mx-1"
          src={
            process.env.PUBLIC_URL + "/images/projects/technologies/github.png"
          }
          alt=""
          style={{ width: "30px" }}
        /> */}
      </a>
    </section>
  );
}
