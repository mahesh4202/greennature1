import React from 'react'
import './Card.css'
import { CCard , CCardImage , CCardTitle , CCardBody , CCardText , CRow , CCol } from '@coreui/react'
import Cate1 from "./Cat1.webp"
import Cate2 from "./Cat2.webp"
import Cate3 from "./Cat3.webp"
import Cate4 from "./Cat4.webp"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoriesEx = () => {
  return (
    <div>
    <h1 classname='my-3'><span className='firstletter1'>C</span>ategories</h1>
      <Container>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
          <CCol xs>
            <CCard className="categories1 my-2">
              <CCardImage orientation="top" src={Cate1} />
              <CCardBody>
                <CCardTitle className="h-100" style={{ fontSize: "22px" , fontWeight: "600" }}>Succulents</CCardTitle>
                <CCardText>
                Buy the largest collection of cactus and succulents plants online. They are a true delight for the cactus plants collectors
                </CCardText>
                <div className='my-3'>
                  <a className='button77'>
                    <Link to='/Category1' className='decorate93'>Purchase</Link>
                  </a>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="categories1 my-2">
              <CCardImage orientation="top" src={Cate2} />
              <CCardBody>
                <CCardTitle className="h-100" style={{ fontSize: "22px" , fontWeight: "600" }}>Bonsai Plants</CCardTitle>
                <CCardText>
                Explore an extensive selection of Bonsai plants that not only purify the air but also foster a positive and uplifting environment.
                </CCardText>
                <div className='my-3'>
                  <a className='button77'>
                    <Link to='/Category2' className='decorate93'>Purchase</Link>
                  </a>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="categories1 my-2">
              <CCardImage orientation="top" src={Cate3} />
              <CCardBody>
                <CCardTitle className="h-100" style={{ fontSize: "22px" , fontWeight: "600" }}>Flowering Plants</CCardTitle>
                <CCardText>
                Largest online nursery for flowering plants including all flowering plants, lilies bulbous plants and many more.
                </CCardText>
                <div className='my-3'>
                  <a className='button77'>
                    <Link to='/Category3' className='decorate93'>Purchase</Link>
                  </a>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="categories1 my-2">
              <CCardImage orientation="top" src={Cate4} />
              <CCardBody>
                <CCardTitle className="h-100" style={{ fontSize: "22px" , fontWeight: "600" }}>Creepers</CCardTitle>
                <CCardText>
                Opt for climbing plants as they add color to dull fences, walls or tellises, we are offering online services for climbers
                </CCardText>
                  <div className='my-3'>
                    <a className='button77'>
                      <Link to='/Category4' className='decorate93'>Purchase</Link>
                    </a>
                  </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </Container>
    </div>
  )
}

export default CategoriesEx