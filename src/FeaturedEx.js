import React from 'react'
import './Card.css'
import Feat1 from "./Feat1.jpg"
import Feat2 from "./Feat2.jpg"
import Feat3 from "./Feat3.jpg"
import Feat4 from "./Feat4.jpg"
import Feat5 from "./Feat5.jpg"
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap'

const FeaturedEx = () => {
  return (
    <div>
    <h1>Featured</h1>
    <Container className='card95 d-flex'>
    <div class="card46 Categories1 mx-2 my-2" style={{width:"13rem"}}>
        <div class="card-details">
          <Card.Img src={Feat1} />
        </div>
    <Card.Body>
      <Card.Title>Periwinkle Flower Plant</Card.Title>
      <Card.Text>₹999</Card.Text>
      <button class="btn35">View</button>
    </Card.Body>
    </div>
      <div class="card46 Categories1 mx-2 my-2" style={{width:"13rem"}}>
        <div class="card-details">
          <Card.Img src={Feat2} />
        </div>
    <Card.Body>
      <Card.Title>Snake Plant</Card.Title>
      <Card.Text>₹323</Card.Text>
      <button class="btn35">View</button>
    </Card.Body>
      </div>
      <div class="card46 Categories1 mx-2 my-2" style={{width:"13rem"}}>
        <div class="card-details">
          <Card.Img src={Feat3} />
        </div>
    <Card.Body>
      <Card.Title>Petunia Flowering Plant</Card.Title>
      <Card.Text>₹745</Card.Text>
      <button class="btn35">View</button>
    </Card.Body>
      </div>
      <div class="card46 Categories1 mx-2 my-2" style={{width:"13rem"}}>
        <div class="card-details">
          <Card.Img src={Feat4} />
        </div>
    <Card.Body>
      <Card.Title>Young Schefflera Plant</Card.Title>
      <Card.Text>₹676</Card.Text>
      <button class="btn35">View</button>
    </Card.Body>
      </div>
      <div class="card46 Categories1 mx-2 my-2" style={{width:"13rem"}}>
        <div class="card-details">
          <Card.Img src={Feat5} />
        </div>
    <Card.Body>
      <Card.Title>Campanula Flowers Plants</Card.Title>
      <Card.Text>₹522</Card.Text>
      <button class="btn35">View</button>
    </Card.Body>
      </div>
    </Container>
    </div>
  )
}

export default FeaturedEx