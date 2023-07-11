import React from "react";
import Button from "react-bootstrap/Button";

class ResumeDownload extends React.Component {
  handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1Nvsz7-IWRJco7KujCWouY93OAhpDvOV4/view?usp=sharing";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    link.click();
  };

  render() {
    return (
      <Button
        variant="primary"
        className="download-button"
        onClick={this.handleDownload}
      >
        Download Resume
      </Button>
    );
  }
}

export default ResumeDownload;
