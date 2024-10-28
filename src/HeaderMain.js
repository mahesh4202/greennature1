import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-bootstrap";
import logo from "./Logo.png"
import "./HeaderEx.css"
import HeaderSearch from './HeaderSearch';
import LoginEx from './LoginEx';
import SignUpEx from './SignUpEx';

function HeaderMain() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavLink>
        <img src={logo} alt="Logo" height={50} width={50}/>
        </NavLink>
        <Navbar.Brand href="#" style={{ fontSize: "22px" , fontWeight: "800" , paddingLeft: "10px" }}>Green Nature</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown style={{ fontSize: "16px" , fontWeight: "700" }} title="Trees" id="navbarScrollingDropdown">
              <NavDropdown.Item to="#">Shop by Type</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">For Wellness</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Decor Type</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">By Location</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{ fontSize: "16px" , fontWeight: "700" }} title="Plant Care" id="navbarScrollingDropdown">
              <NavDropdown.Item to="#">Plant Protection</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Plant Growth</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Symptoms by Insects/Pests</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">By Disease</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{ fontSize: "16px" , fontWeight: "700" }} title="Tools & Accessories" id="navbarScrollingDropdown">
              <NavDropdown.Item to="#">Pruning & Cutting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Hand</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Digging</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Watering</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Spray</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Garden Decor</NavDropdown.Item>
            </NavDropdown>
                <div>
                <LoginEx />
                </div>
                <div>
                <SignUpEx />
                </div>
          </Nav>
          <HeaderSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMain;