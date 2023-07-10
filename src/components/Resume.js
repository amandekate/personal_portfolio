import React from "react";
import Button from "react-bootstrap/Button";

class ResumeDownload extends React.Component {
  handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1u8ipsdcnM7s4Exz6VNvbpWvYgOlm9pSx/view?usp=drive_link";
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
