import Carousel from 'react-bootstrap/Carousel';
import Carouselll1 from "../Carousell1.jpg"
import Carouselll2 from "../Carousell2.jpg"
import Carouselll3 from "../Carousell3.jpg"
import Button from 'react-bootstrap/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import './Card.css'

function CarouselEx3() {
  return (
    <div className="container mt-2">
    <Carousel>
      <Carousel.Item>
      <img src={Carouselll1} alt="Logo" />
        <Carousel.Caption>
          <h5>Best variety of plants for every house</h5>
          <Button variant="primary" className="hide"><RemoveRedEyeIcon /> View </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carouselll2} alt="Logo" />
        <Carousel.Caption>
          <h5>Plotted flowering plants for any mood</h5>
          <Button variant="primary" className="hide"><AdsClickIcon /> Click to order</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carouselll3} alt="Logo" />
        <Carousel.Caption>
          <h5>Decorate your garden with our wide range of plant collections</h5>
          <Button variant="primary" className="hide"><AdsClickIcon /> Click to order</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselEx3;