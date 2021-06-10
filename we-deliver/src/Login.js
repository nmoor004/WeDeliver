import React, { Component } from "react";
import {Button as Button, Form, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './WeDeliverLogo_Transparent.png';
import Home from './Home';

import {
	Route,
	Switch,
	Link,
	Redirect,
	BrowserRouter as Router
} from "react-router-dom";

class Login extends Component { 
	constructor(props, context) {
		super(props, context); 
		this.state = {
			username: "",
			password: "",
			isAuthentic: false,
			render: false
			
		};
		
	}
	
	checkDetails() {
		if (this.state.username == "Hello" && this.state.password == "World" ) {
			console.log("Login success!");
			this.setState({isAuthentic: true});
		}
		else {
			console.log("Incorrect login.");
		}
	}
	
	render () {
		let isAuth = this.state.isAuthentic;
		
		if (isAuth == false) {
			return (
			<div style={{backgroundColor: "transparent"}}> 
				<img src={logo} className="App-logo" alt="logo" />
				<h1> WeDeliver </h1>
				
				<Form>
					<Form.Group as={Row} controlId="formUser">
						<Form.Label> Username </Form.Label> 
						<Form.Control 
							placeholder="Enter your username"
							onChange={(e) => this.setState({ username: e.target.value })}
						/>
					</Form.Group>
				
					<Form.Group as={Row} controlId="formPassword">
						<Form.Label> Password </Form.Label> 
						<Form.Control 
							placeholder="Enter your password"
							onChange={(e) => this.setState({ password: e.target.value })}
						/>
					</Form.Group>
							
					<Button 
						variant="primary"
						onClick={ () => this.checkDetails() }
					>
						Submit
					</Button>{' '}
				</Form>


			</div>
			);
		}
		else if (isAuth == true) {

			if (this.state.render == false) {
				setTimeout(() => { this.setState({render: true}) }, 3000);
				return (
						<div>
							<h1> You've logged in. </h1>
						</div>
				);
				
			}
			else if (this.state.render == true) {
				return (
					<Redirect to="/home" />
				);
			}
		}
	}
	
}

const buttonStyle = {
  margin: 10,
};

export default Login;