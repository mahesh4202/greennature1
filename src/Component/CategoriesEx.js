import React from 'react'
import './Card.css'
import Cate1 from "./Assets/Cat1.webp"
import Cate2 from "./Assets/Cat2.webp"
import Cate3 from "./Assets/Cat3.webp"
import Cate4 from "./Assets/Cat4.webp"
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap'

const CategoriesEx = () => {
  return (
    <div>
    <h1>Categories</h1>
    <Container className='card95 d-flex'>
    <div class="card46 categories1 mx-2 my-2" style={{width:"16rem"}}>
        <div class="card-details">
          <Card.Img src={Cate1} />
          <h3>Succulents</h3>
          <Card.Text>Buy the largest collection of cactus and succulents plants online. They are a true delight for the cactus plants collectors</Card.Text>
          <button className='button77'>Purchase</button>
      </div>
    </div>
      <div class="card46 categories1 mx-2 my-2" style={{width:"16rem"}}>
        <div class="card-details">
          <Card.Img src={Cate2} />
          <h3>Bonsai Plants</h3>
          <Card.Text>Explore an extensive selection of Bonsai plants that not only purify the air but also foster a positive and uplifting environment.</Card.Text>
          <button className='button77'>Purchase</button>
        </div>
      </div>
      <div class="card46 categories1 mx-2 my-2" style={{width:"16rem"}}>
        <div class="card-details">
          <Card.Img src={Cate3} />
          <h3>Flowering Plants</h3>
          <Card.Text>Largest online nursery for flowering plants including all flowering plants, lilies and bulbous plants.</Card.Text>
          <button className='button77'>Purchase</button>
        </div>
      </div>
      <div class="card46 categories1 mx-2 my-2" style={{width:"16rem"}}>
        <div class="card-details">
          <Card.Img src={Cate4} />
          <h3>Creepers</h3>
          <Card.Text>Opt for climbing plants as they add color to dull fences, walls or tellises, we are offering online services for climbers and creeper plant</Card.Text>
          <button className='button77'>Purchase</button>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default CategoriesEx