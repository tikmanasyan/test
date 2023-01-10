import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
    return (


        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/about'>About</NavLink>
            <NavLink className='nav-link' to='/contact'>Contact</NavLink>   
            <NavLink className='nav-link' to='/users'>Users</NavLink>   
            <NavLink className='nav-link' to='/countries'>Countries</NavLink>   
            <NavLink className='nav-link' to='/posts'>Posts</NavLink>   
            <NavLink className='nav-link' to='/categories'>Categories</NavLink>   
            <NavLink className='nav-link' to='/notepad'>Notes</NavLink>   
            <NavLink className='nav-link' to='/notepad2'>Notes2</NavLink>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    )
}

export default NavBar;  