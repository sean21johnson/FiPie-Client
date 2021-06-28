import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavBar.css";

// Need to come back to this component
    // if a user clicks login, will need to either re-direct to a login page OR have a small dropdown appear that the user can login with
    // if a user clicks register, will need to re-direct the user to a registration page
    // when a user is successfully logged in, will need to have props passed in so that it says "welcome, name"
    // when a user is successfully logged in, will need to have a logout option instead of login
    // above will all need to be based on conditional rendering whether the user is logged in or not

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">
					<div className="upper-left">
						<h1>FiPie</h1>
						<div className="upper-left-nav-logo">
							<FontAwesomeIcon className="nav-logo" icon={faChartPie} />
						</div>
					</div>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav>
						<Nav.Link href="#register">Register</Nav.Link>
						<Nav.Link href="#login">
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
