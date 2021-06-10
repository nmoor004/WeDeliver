import React, { Component } from "react";
import {Button as Button, Form, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './WeDeliverLogo_Transparent.png';
import Home from './Home';
import styled from 'styled-components';
import {
	Route,
	Switch,
	Link,
	Redirect,
	BrowserRouter as Router
} from "react-router-dom";

const Div = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
	  width: 20%;
	  height: auto;
	  display: block;
	  margin-left: auto;
	  margin-right: auto;


`

const Div2 = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


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
			<Div> 
				<Img src={logo} className="App-logo" alt="logo" />
				<Div3>
					<h1 style={{fontWeight: 'bold', fontSize: '250%', }}> WeDeliver </h1>
				</Div3>
				<Form style={{display: "flex", flex: 1, flexDirection:"column", alignItems:"center"}}>
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
							type="password"
							placeholder="Enter your password"
							onChange={(e) => this.setState({ password: e.target.value })}
						/>
					</Form.Group>
							
					<Button 
						variant="primary"
						style={{marginTop: "10px"}}
						onClick={ () => this.checkDetails() }
					>
						Submit
					</Button>{' '}
				</Form>


			</Div>
			);
		}
		else if (isAuth == true) {

			if (this.state.render == false) {
				setTimeout(() => { this.setState({render: true}) }, 3000);
				return (
						<Div2>
							<h1> You've logged in. </h1>
						</Div2>
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