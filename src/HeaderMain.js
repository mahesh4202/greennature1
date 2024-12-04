import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-bootstrap";
import logo from "./Logo.png"
import "./HeaderEx.css"
import HeaderSearch from './HeaderSearch';
import LoginEx from './LoginEx';
import SignUpEx from './SignUpEx';
import { Link } from 'react-router-dom';

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
              <Link className='links' to="/ShopbytypeMain">Shop by Type</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">For Wellness</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">Decor Type</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">By Location</Link>
            </NavDropdown>
            <NavDropdown style={{ fontSize: "16px" , fontWeight: "700" }} title="Plant Care" id="navbarScrollingDropdown">
              <Link className='links' to="#">Plant Protection</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">Plant Growth</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">By Disease</Link>
            </NavDropdown>
            <NavDropdown style={{ fontSize: "16px" , fontWeight: "700" }} title="Tools & Accessories" id="navbarScrollingDropdown">
              <Link className='links' to="#">Pruning & Cutting</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">Hand</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">Digging</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">Watering</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">Spray</Link>
              <NavDropdown.Divider />
              <Link className='links' to="#">Garden Decor</Link>
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