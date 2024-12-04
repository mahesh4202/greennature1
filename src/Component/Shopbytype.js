import React from 'react'
import { CCard , CCardImage , CCardTitle , CCardBody , CCardText , CRow , CCol , CCardFooter} from '@coreui/react'
import Type1 from './Assets/Type1.jpg'
import Type2 from './Assets/Type2.jpg'
import Type3 from './Assets/Type3.jpg'
import Type4 from './Assets/Type4.jpg'
import Type5 from './Assets/Type5.jpg'
import Type6 from './Assets/Type6.jpg'
import Type7 from './Assets/Type7.jpg'
import Type8 from './Assets/Type8.jpg'
import Type9 from './Assets/Type9.jpg'
import Type10 from './Assets/Type10.jpg'
import { Container } from 'react-bootstrap'

const Shopbytype = () => {
  return (
    <Container>
    <h1 classname='my-3'><span className="firstletter1">S</span>hop by type</h1>
        <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="g-4">
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type1} />
                <CCardBody>
                    <CCardTitle>Mango</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type2} />
                <CCardBody>
                    <CCardTitle>Sandal wood</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type3} />
                <CCardBody>
                    <CCardTitle>Avacado</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type4} />
                <CCardBody>
                    <CCardTitle>Banana</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type5} />
                <CCardBody>
                    <CCardTitle>Jack fruit</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            </CRow>
            <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="g-4">
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type6} />
                <CCardBody>
                    <CCardTitle>Guava</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type7} />
                <CCardBody>
                    <CCardTitle>Tamarind</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type8} />
                <CCardBody>
                    <CCardTitle>Mahogany</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type9} />
                <CCardBody>
                    <CCardTitle>Neem</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol style={{ margin: "30px 0px" }}>
                <CCard className="h-100" style={{ borderRadius: "10% 10% 2% 2%" }}>
                <CCardImage orientation="top" src={Type10} />
                <CCardBody>
                    <CCardTitle>Banyan</CCardTitle>
                    <button class="btn35 mt-2">View</button>
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </Container>
  )
}

export default Shopbytype