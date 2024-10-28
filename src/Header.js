import Container from "react-bootstrap/Container";
import logo from "./Logo.png"
import "./HeaderEx.css"
import { AppBar, Toolbar } from "@mui/material";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-bootstrap";
import LoginEx from "./LoginEx";
import SignUpEx from "./SignUpEx";
import HeadSearchEx from "./HeadSearchEx";

function Header() {
  return (
    <div className="w-100">
    <AppBar position="static" className="header1" sx={{backgroundColor: "#05a039"}}>
        <Toolbar className="container">
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <NavLink>
        <img src={logo} alt="Logo" height={50} width={50}/>
        </NavLink>
          <Nav className="mx-3 hide">
            <NavDropdown title="Trees" id="collapsible-nav-dropdown">
              <NavDropdown.Item to="#">Shop by Type</NavDropdown.Item>
              <NavDropdown.Item to="#">For Wellness</NavDropdown.Item>
              <NavDropdown.Item to="#">Decor Type</NavDropdown.Item>
              <NavDropdown.Item to="#">By Location</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Seeds" id="collapsible-nav-dropdown">
              <NavDropdown.Item to="#">Vegetables</NavDropdown.Item>
              <NavDropdown.Item to="#">Flowers</NavDropdown.Item>
              <NavDropdown.Item to="#">Herbs</NavDropdown.Item>
              <NavDropdown.Item to="#">Fruits</NavDropdown.Item>
              <NavDropdown.Item to="#">Trees & Grass</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Plant Care" id="collapsible-nav-dropdown">
              <NavDropdown.Item to="#">Plant Protection</NavDropdown.Item>
              <NavDropdown.Item to="#">Plant Growth</NavDropdown.Item>
              <NavDropdown.Item to="#">Symptoms by Insects/Pests</NavDropdown.Item>
              <NavDropdown.Item to="#">By Disease</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tools & Accessories" id="collapsible-nav-dropdown">
              <NavDropdown.Item to="#">Pruning & Cutting</NavDropdown.Item>
              <NavDropdown.Item to="#">Hand</NavDropdown.Item>
              <NavDropdown.Item to="#">Digging</NavDropdown.Item>
              <NavDropdown.Item to="#">Watering</NavDropdown.Item>
              <NavDropdown.Item to="#">Spray</NavDropdown.Item>
              <NavDropdown.Item to="#">Garden Decor</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <HeadSearchEx />
          <div className="d-flex">
      <MenuItem>
        <IconButton size="large" aria-label="show 9 new mails">
          <Badge badgeContent={9} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 47 new notifications" >
          <Badge badgeContent={47} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" >
          <AccountCircle />
        </IconButton>
      </MenuItem>
      </div>
      </Container>
    </Navbar>
        </Toolbar>
    </AppBar>
    </div>
  );
}

export default Header;