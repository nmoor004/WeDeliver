import React, { Component } from "react";
import {
	Nav,
	Navbar,
	FormControl,
	Form,
	Button
} from "react-bootstrap";
import './Navbar.css';


class Home extends Component {
	
	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Brand style={{fontWeight: "bold", color: 'white', marginLeft: "10px"}}>WeDeliver</Navbar.Brand>
					<Nav className="mr-auto">
					  <Nav.Link href="/login">Home</Nav.Link>
					  <Nav.Link href="/home">My Orders</Nav.Link>
					  <Nav.Link href="#pricing">Assistance</Nav.Link>
					</Nav>
				</Navbar>
			</div>
		);
		
	};
	
}

export default Home;