import { Col, Container, Row } from "react-bootstrap";
import html from "../assets/img/html-icon.svg";
import css from "../assets/img/tailwind-css-icon.svg";
import js from "../assets/img/javascript-programming-language-icon.svg";
import react from "../assets/img/react-js-icon.svg";
import next from "../assets/img/nextjs-icon.svg";
import node from "../assets/img/node-js-icon.svg";
import express from "../assets/img/express-js-icon.svg";
import mongo from "../assets/img/mongodb-icon.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const technologies = [
    { logo: html, name: "Html" },
    { logo: css, name: "Css" },
    { logo: js, name: "Javascript" },
    { logo: react, name: "React Js" },
    { logo: next, name: "Next Js" },
    { logo: node, name: "Node Js" },
    { logo: express, name: "Express Js" },
    { logo: mongo, name: "MongoDb" },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <div className="skill-grid">
                <Row>
                  {technologies.map((tech, index) => (
                    <Col key={index} xs={6} md={3} className="grid-item">
                      <img className="technology-logo" src={tech.logo} alt="Technology Logo" />
                      <br></br>
                      <h5>{tech.name}</h5>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background Image" />
    </section>
  );
};
