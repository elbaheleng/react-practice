import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faUserTie} from '@fortawesome/free-solid-svg-icons'

function Header() {
    
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container  className='mx-0'>
        <img className="d-none d-lg-block" src="./headerlogo.png" alt="logo" width={100} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <FontAwesomeIcon className='my-auto ms-2 d-block d-lg-none' icon={faMagnifyingGlass} />
        <Navbar.Brand href="#home" className="d-flex mx-auto d-lg-none"><img src="./headerlogo.png" alt="logo" width={100} /></Navbar.Brand>
        <img src="./internet.png" alt="" className='ms-3 my-auto d-block d-lg-none' width={20} height={20} />
            <FontAwesomeIcon className='ms-3 my-auto d-block d-lg-none' icon={faUserTie} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Solutions</Nav.Link>
            <Nav.Link href="#pricing">Industries</Nav.Link>
            <Nav.Link href="#pricing">For You</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='w-100'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Shop</Nav.Link>
            <Nav.Link href="#deets">Drivers</Nav.Link>
            <Nav.Link href="#deets">Support</Nav.Link>
            <FontAwesomeIcon className='my-auto' icon={faMagnifyingGlass} />
            <img src="./internet.png" alt="" className='ms-3 my-auto' width={20} height={20} />
            <FontAwesomeIcon className='ms-3 my-auto' icon={faUserTie} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }


export default Header