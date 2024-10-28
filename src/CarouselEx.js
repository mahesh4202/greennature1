import Carousel from 'react-bootstrap/Carousel';
import Carouselll1 from "./Carousell1.jpeg"
import Carouselll2 from "./Carousell2.jpeg"
import Carouselll3 from "./Carousell3.jpeg"
import Button from 'react-bootstrap/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AdsClickIcon from '@mui/icons-material/AdsClick';

function CarouselEx() {
  return (
    <div className="container mt-2">
    <Carousel>
      <Carousel.Item>
      <img src={Carouselll1} alt="Logo" height={550} width={1200}/>
        <Carousel.Caption>
          <h3>Best variety of plants for every house</h3>
          <Button variant="primary" className="hide"><RemoveRedEyeIcon /> View </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carouselll2} alt="Logo" height={550} width={1200}/>
        <Carousel.Caption>
          <h3>Plotted flowering plants for any mood</h3>
          <Button variant="primary" className="hide"><AdsClickIcon /> Click to order</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carouselll3} alt="Logo" height={550} width={1200}/>
        <Carousel.Caption>
          <h3>Decorate your garden with our wide range of plant collections</h3>
          <Button variant="primary" className="hide"><AdsClickIcon /> Click to order</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselEx;