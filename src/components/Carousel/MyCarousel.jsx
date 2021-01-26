import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousel/slide.webp";

import "./MyCarousel.css";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators={false} interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
