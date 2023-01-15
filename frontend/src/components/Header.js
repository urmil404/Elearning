import React from 'react'
import { Container, Nav, NavDropdown, Navbar, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import "./CSS/Header.css";
const Header = () =>
{
	return (
		<>
			<Navbar bg="" className="bg-slate-900" variant='dark' expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">
						<img src="/images/logo-white.png" alt="E-Learning logo" className="h-12" />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={ { maxHeight: '100px' } }
							navbarScroll
						>
							<Link to="/" className="nav-link dropdown-item">Home</Link>
							<Link to="/learning" className="nav-link dropdown-item">Learning</Link>
							<Link to="/course" className="nav-link dropdown-item">Courses</Link>
							<Link to="/editor" className="nav-link dropdown-item">Editor</Link>
							<Link to="/certificate" className="nav-link dropdown-item">Certificate</Link>
							<Link to="/about" className="nav-link dropdown-item">About</Link>
							<Link to="/contact" className="nav-link dropdown-item">Contact</Link>
						</Nav>
						<Link to="/login" className='text-decoration-none'><Button variant="" className="bg-white">Login</Button></Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
