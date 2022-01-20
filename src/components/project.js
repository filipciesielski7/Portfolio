import React from "react";

export default function Project({
  name,
  description,
  technologies,
  github,
  link,
}) {
  return (
    <div className="project d-flex justify-content-center align-items-center my-3 my-lg-5">
      <div className="d-flex flex-column">
        {technologies.map((technology) => (
          <img
            className="m-2"
            key={technology.name}
            src={process.env.PUBLIC_URL + technology.icon}
            alt={technology.name}
            style={{ width: "40px" }}
          />
        ))}
      </div>
      <div className="position-relative">
        <img
          className="project-image"
          src={process.env.PUBLIC_URL + `/images/projects/overview/${name}.png`}
          alt=""
        />
        <div className="project-card d-flex flex-column bg-white p-3 mx-auto shadow-lg">
          <div className="d-flex justify-content-between">
            <h5 className="d-inline-block">{name}</h5>
            <div>
              {link && (
                <a
                  className="mx-1"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/helpers/link.svg"}
                    alt="see project"
                    style={{ width: "25px" }}
                  />
                </a>
              )}
              {github && (
                <a
                  className="mx-1"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/projects/technologies/github.png"
                    }
                    alt="see on github"
                    style={{ width: "30px" }}
                  />
                </a>
              )}
            </div>
          </div>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
}
