import { Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  codeLink,
  visitLink,
}) => {
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a
              className="icon-button"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              className="icon-button"
              href={visitLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiExternalLinkLine />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
