import "./App.css";
import MyCarousel from "./components/Carousel/MyCarousel";
import MyNavbar from "./components/NavBar/Navbar";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import Fade from "react-reveal/Fade";
import BgImg from "./assets/img/parallax/background.webp";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <MyCarousel />
      <TitleMessage />
      <MyNavbar />

      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={BgImg} bgImageAlt="" strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
