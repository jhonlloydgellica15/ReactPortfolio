import "./App.css";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import MyCarousel from "./components/Carousel/MyCarousel";
import MyNavbar from "./components/NavBar/Navbar";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import Fade from "react-reveal/Fade";
import BgImg from "./assets/img/parallax/background.webp";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import ProjectTimeline from "./components/ProjectTimeline/ProjectTimeline";
import Contact from "./pages/ContactForm/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousel />
      <TitleMessage />
      <MyNavbar />
      <Particles className="particles particles-box" params={particlesOptions} />
      <div>
        <Parallax bgImage={BgImg} bgImageAlt="profile">
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>

        <hr />
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <Skills />
          </Slide>
        </Container>

        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>

        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>

        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
