import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Tilt from "react-tilt";
import Logo from "../../assets/img/experience/logo.jpg";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Logo} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Segworks Technologies Corporation</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Software Developer Internship</strong>
                    <br />
                    <strong>Task:</strong> Developed Payroll and Biometrics System
                    <br />
                    <strong>Technology:</strong> C#, Bunifu, MS-SQL, Yii, Photoshop
                    <br />
                    <strong>Duration:</strong> August 2019 - September 2019
                    <br />
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
