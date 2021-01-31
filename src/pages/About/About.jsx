import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../../assets/img/profile/profile.webp";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>

        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello there! I am <strong>&nbsp;Jhon Lloyd Gellica</strong>A passionate programmer and a Learner, born in the city of Davao Philippines. I am a Software and Frontend Web Developer with
                the following tech stacks Html:5, Css3, Javascript(es6), Bootstrap, PhP, ReactJs, C# Winforms, MS-Sql, MySql. In 2020, I successfully completed my Bachelor Degree, 'Bachelor of Science
                in Information Technology' at Holy Cross of Davao College. <br /> I'm a Dedicated, Hardworking, Detail Oriented and Passionate person. Along with that, I also like building practice
                softwares or applications to enhance my skills. I love learning about new technologies, what bugs or errors are they encountered and how can I use them to build a better software.
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1hlaejIu78hpuaRF6l6An7Wmb_caIZnXy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/jhonlloydgellica15" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/jhon-lloyd-gellica-0862aa201/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
