import React from 'react';
import Serv1 from "./Serv1.webp"
import Serv2 from "./Serv2.webp"
import Serv3 from "./Serv3.webp"
import Serv4 from "./Serv4.webp"
import { CCard , CCardImage , CCardTitle , CCardBody , CCardText , CRow , CCol } from '@coreui/react'
import { Container } from 'react-bootstrap';

function ServicesEx() {
  return (
    <div>
    <h1 className='my-3'><span className="firstletter1">S</span>ervices</h1>
    <Container className='card95 d-flex'>
    <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">
  <CCol xs>
    <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
      <CCardImage className="servimg" orientation="top" src={Serv1} />
      <CCardBody>
        <CCardTitle>Plant Suppling Services</CCardTitle>
        <CCardText>
        Our skilled and expoerienced team offers a wider range of Plants and saplings to our reputed clients as per their requirements and at affordable rates.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
      <CCardImage className="servimg" orientation="top" src={Serv2} />
      <CCardBody>
        <CCardTitle>Nursery Services</CCardTitle>
        <CCardText>
        Using the vast industrial knowledge, which we have amassed over the years, we constantly provide various nursery services to our clients as and when requested.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
      <CCardImage className="servimg" orientation="top" src={Serv3} />
      <CCardBody>
        <CCardTitle>Landscape Design</CCardTitle>
        <CCardText>
        Looking for beautiful landscape ideas? Count on our plants, garden flowers to be healthy and thriving. We bring you stunning examples of garden design from peoperties around the world.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
      <CCardImage className="servimg" orientation="top" src={Serv4} />
      <CCardBody>
        <CCardTitle>Garden Maintenance</CCardTitle>
        <CCardText>
        Create the perfect background for our life to happen with the perfect selection of houseplants, home decor, home fragrance and gift items for everyone you know.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
    </Container>
    </div>
  );
}

export default ServicesEx;
