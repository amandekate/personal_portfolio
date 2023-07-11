import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "AI_NEWS Project",
      description:
        "AI_News Application that provides news from diffrent sources and topics from voice search with help of Alan_AI",
      imgUrl: projImg1,
      codeLink: "https://github.com/amandekate/ai_news_project",
      visitLink: "https://ai-news-app-by-aman.netlify.app/",
      tags: ["#React", "#ALAN", "#News-Api", "#Alan-Api"],
    },
    {
      title: "Dall-E 2.0",
      description:
        "OpenAI's DALL-E model: A deep learning model that generates images from text input",
      imgUrl: projImg2,
      codeLink: "https://github.com/amandekate/dall_e",
      visitLink: "https://dall-e-fe-amandekate.vercel.app/",
      tags: ["#React", "#Node", "#Express", "#MongoDb", "#OpenAi"],
    },
    {
      title: "Dashboard App",
      description:
        "React Admin Dashboard Application : This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!     ",
      imgUrl: projImg3,
      codeLink: "https://github.com/amandekate/dashboard",
      visitLink: "https://dashboard-amandekate.vercel.app/",
      tags: ["#React", "#tailwind", "#Syncfusion"],
    },
    {
      title: "Ai Image Genration App {Kandinsky Modal}",
      description:
        "Ai Image genration application based on Kandinsky Modal 2.0 with Replicate Api ",
      imgUrl: projImg4,
      codeLink: "https://github.com/amandekate/kandinsky",
      visitLink: "https://kandinsky-livid.vercel.app/",
      tags: ["#NextJs", "#Tailwind", "#Replicate"],
    },
    {
      title: "TechNotes Application",
      description:
        "techNotes App build with Mern Stack with has admin , manager and employee dashboards.",
      imgUrl: projImg5,
      codeLink: "https://github.com/amandekate/technotes_app",
      visitLink: "https://technotes-8p5o.onrender.com/",
      tags: ["React", "#redux", "#mongoDb", "#jwt"],
    },
  ];

  return (
    <section className="project" id="projects">
      <div className="proj-bx">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <br />
                    <Row>
                      {projects.map((project, index) => {
                        return (
                          <Col md={6} key={index}>
                            <ProjectCard {...project} />
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      ></img>
    </section>
    
  );
};
