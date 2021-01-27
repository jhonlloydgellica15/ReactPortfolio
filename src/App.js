import "./App.css";
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

function App() {
  return (
    <div className="App">
      <MyCarousel />
      <TitleMessage />
      <MyNavbar />

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

        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
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
      </div>
    </div>
  );
}

export default App;
