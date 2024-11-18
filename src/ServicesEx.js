import React from 'react';
import Card from 'react-bootstrap/Card';
import Serv1 from "./Serv1.webp"
import Serv2 from "./Serv2.webp"
import Serv3 from "./Serv3.webp"
import Serv4 from "./Serv4.webp"
import { Container, Row } from 'react-bootstrap';

function ServicesEx() {
  return (
    <div>
    <h1><span className="firstletter1">S</span>ervices</h1>
        <Container className="d-flex">
            <Row>
              <Card className="col-12 card ms-3 my-2" style={{width:"16rem"}}>
                <Card.Img className="servimg" variant="top" src={Serv1} />
                <Card.Body>
                  <Card.Title>Plant Suppling Services</Card.Title>
                  <Card.Text>
                    Our skilled and expoerienced team offers a wider range of Plants and saplings to our reputed clients as per their requirements and at affordable rates.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="col-12 card ms-3 my-2" style={{width:"16rem"}}>
                <Card.Img className="servimg" variant="top" src={Serv2} />
                <Card.Body>
                  <Card.Title>Nursery Services</Card.Title>
                  <Card.Text>
                  Using the vast industrial knowledge, which we have amassed over the years, we constantly provide various nursery services to our clients as and when requested.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="col-12 card ms-3 my-2" style={{width:"16rem"}}>
                <Card.Img className="servimg" variant="top" src={Serv3} />
                <Card.Body>
                  <Card.Title>Landscape Design</Card.Title>
                  <Card.Text>
                    Looking for beautiful landscape ideas? Count on our plants, garden flowers to be healthy and thriving. We bring you stunning examples of garden design from peoperties around the world.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="col-12 card ms-3 my-2" style={{width:"16rem"}}>
                <Card.Img className="servimg" variant="top" src={Serv4} />
                <Card.Body>
                  <Card.Title>Garden Maintenance</Card.Title>
                  <Card.Text>
                    Create the perfect background for our life to happen with the perfect selection of houseplants, home decor, home fragrance and gift items for everyone you know.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
        </Container>
    </div>
  );
}

export default ServicesEx;
