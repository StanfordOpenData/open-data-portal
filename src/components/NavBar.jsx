import React from 'react';
import './styles.css';
import logoImage from './static/Main Logo@2x.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './recruitment.css';

function NavBar() {
  return (
    <div id="nav">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logoImage}
            style={{verticalAlign: 'middle', height:'5em', paddingTop: '.5em'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#/datasets">Datasets</Nav.Link>
            <Nav.Link href="#/aboutus">About Us</Nav.Link>
            <Nav.Link href="#/contribute" className="btnSecondary" id="contribute">Contribute a Dataset</Nav.Link>
            <Nav.Link href="https://stanforddaily.com/" target="_blank">Stanford Daily</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <a id='recruitment' href='https://tinyurl.com/sodp20' target='_blank' rel="noopener noreferrer">
        <h2>Interested in the Open Data Project? Join our team! Applications due October 26th!</h2>
      </a>
    </div>
  );
}

export default NavBar;
