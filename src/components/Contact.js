import { useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useFormspark } from "@formspark/use-formspark";

const FORM_ID = process.env.REACT_APP_FORM_ID || "9GKdAddT";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [submit, submitting] = useFormspark({
    formId: FORM_ID,
  });
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({
    success: null,
    message: null,
  });

  const [showModal, setShowModal] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const toggleModalShow = () => {
    setShowModal((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await submit(formDetails);
      setButtonText("Send");
      console.log(response);
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormUpdate(name, value);
  };

  return (
    <>
      <button className="vvd" onClick={toggleModalShow}>
        <span>Let’s Connect</span>
      </button>
      <Modal size="lg" show={showModal} onHide={toggleModalShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img src={contactImg} alt="Contact Us" />
              </Col>
              <Col md={6}>
                <h2>Get in Touch</h2>
                <form onSubmit={onSubmit}>
                  <Row>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formDetails.firstName}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formDetails.lastName}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formDetails.email}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone No."
                        value={formDetails.phone}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col>
                      <textarea
                        rows="6"
                        name="message"
                        placeholder="Message"
                        value={formDetails.message}
                        onChange={handleChange}
                      />
                      {/* <button type="submit">
                        <span>{buttonText}</span>
                      </button> */}
                    </Col>
                    {status.message && (
                      <Col>
                        <p
                          className={
                            status.success && status.success === false
                              ? "danger"
                              : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModalShow}>
            Close
          </Button>
          <Button type="submit" onClick={onSubmit}>
            <span>{buttonText}</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
