import React from "react";

export default function Project({
  name,
  description,
  technologies,
  github,
  link,
}) {
  return (
    <div className="project d-flex flex-lg-column justify-content-center align-items-center my-3 my-lg-5">
      <div className="d-flex flex-column flex-lg-row ">
        {technologies.map((technology) => (
          <img
            className="project__technology m-2"
            key={technology.name}
            src={process.env.PUBLIC_URL + technology.icon}
            alt={technology.name}
          />
        ))}
      </div>
      <div className="position-relative">
        <img
          className="project__image"
          src={process.env.PUBLIC_URL + `/images/projects/overview/${name}.png`}
          alt=""
        />
        <div className="project__card d-flex flex-column bg-white pt-3 px-3 mx-auto shadow-lg">
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
                    className="project__link project__link--website"
                    src={process.env.PUBLIC_URL + "/images/helpers/link.svg"}
                    alt="see project"
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
                    className="project__link project__link--github"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/projects/technologies/github.png"
                    }
                    alt="see on github"
                  />
                </a>
              )}
            </div>
          </div>
          <p className="project__description mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
