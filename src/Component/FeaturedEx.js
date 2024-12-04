import React from 'react'
import './Card.css'
import { CCard , CCardImage , CCardTitle , CCardBody , CCardText , CRow , CCol } from '@coreui/react'
import Feat1 from "./Assets/Feat1.jpg"
import Feat2 from "./Assets/Feat2.jpg"
import Feat3 from "./Assets/Feat3.jpg"
import Feat4 from "./Assets/Feat4.jpg"
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap'

const FeaturedEx = () => {
  return (
    <div>
    <h1 classname='my-3'><span className="firstletter1">F</span>eatured</h1>
    <Container>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
          <CCol xs>
            <CCard className="categories1 my-2">
              <CCardImage orientation="top" src={Feat1} />
              <CCardBody>
                <Card.Title>Periwinkle Flower Plant</Card.Title>
                <Card.Text>₹999</Card.Text>
                <button class="btn35">View</button>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="categories1 my-2">
              <CCardImage orientation="top" src={Feat2} />
              <CCardBody>
                <Card.Title>African bowstring hemp</Card.Title>
                <Card.Text>₹323</Card.Text>
                <button class="btn35">View</button>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="categories1 my-2">
              <CCardImage orientation="top" src={Feat3} />
              <CCardBody>
                <Card.Title>Petunia Flowering Plant</Card.Title>
                <Card.Text>₹745</Card.Text>
                <button class="btn35">View</button>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="categories1 my-2">
              <CCardImage orientation="top" src={Feat4} />
              <CCardBody>
                <Card.Title>Young Schefflera Plant</Card.Title>
                <Card.Text>₹676</Card.Text>
                <button class="btn35">View</button>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </div>
  )
}

export default FeaturedEx