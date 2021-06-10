import React, { Component } from "react";
import {
	Nav,
	Navbar,
	FormControl,
	Form,
	Button,
	Col
} from "react-bootstrap";
import './Navbar.css';
import {
	Route,
	Switch,
	Link,
	Redirect,
	BrowserRouter as Router
} from "react-router-dom";
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;


class Home extends Component {
		constructor(props, context) {
		super(props, context); 
		this.state = {
			render: false,
			items: ""
			
		};
		
	}
	
	
	render() {
		if (this.state.render == false) {
			return (
				<div>
					<Navbar>
						<Navbar.Brand style={{fontWeight: "bold", color: 'white', marginLeft: "10px"}}>WeDeliver</Navbar.Brand>
						<Nav className="mr-auto">
						  <Nav.Link style={{fontWeight: "bold", color:'white'}} href="/home">Home</Nav.Link>
						  <Nav.Link style={{fontWeight: "bold", color:'white'}} href="/delivery">My Deliveries</Nav.Link>
						  <Nav.Link style={{fontWeight: "bold", color:'white'}} href="#assist">Assistance</Nav.Link>
						</Nav>
					</Navbar>
					<Div>
						<Button 
							variant="primary"
							style={{marginTop: "10px", width: "500px", height: "100px"}}
							onClick={ () => this.setState({render: true}) }
						>
							Schedule a Delivery
						</Button>{' '}
					
					</Div> 
					
				</div>
			);
		}
		else if (this.state.render == true) {
			return (
				<div>
					<Navbar>
						<Navbar.Brand style={{fontWeight: "bold", color: 'white', marginLeft: "10px"}}>WeDeliver</Navbar.Brand>
						<Nav className="mr-auto">
						  <Nav.Link style={{fontWeight: "bold", color:'white'}} href="/home">Home</Nav.Link>
						  <Nav.Link style={{fontWeight: "bold", color:'white'}} href="/delivery">My Deliveries</Nav.Link>
						  <Nav.Link style={{fontWeight: "bold", color:'white'}} href="#assist">Assistance</Nav.Link>
						</Nav>
					</Navbar>
					<Div>
						<Form style={{display: "flex", flex: 0.25, flexDirection: "column"}}>
							<div>
							  <Form.Label style={{marginRight: "10px"}} className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
								Store Location
							  </Form.Label>
							  <Form.Control
								as="select"
								className="mr-sm-2"
								id="inlineFormCustomSelect"
								custom
							  >
								<option value="0">Choose...</option>
								<option value="1">Walmart</option>
								<option value="2">Raley's</option>
								<option value="3">Costco</option>
								<option value="4">Safeway</option>
								<option value="5">Trader Joe's</option>
							  </Form.Control>
							  
							</div>
							<div style={{display: "flex"}}>
								<Form.Label style={{marginRight: "10px"}} className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
								Items to Buy
							  </Form.Label>
								<textarea onChange={(e) => this.setState({ items: e.target.value })}> </textarea>
							
							</div>
							
							<div style={{display: "flex", marginTop: "10px"}}>
								<Form.Label style={{marginRight: "10px"}} className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
								Instructions
							  </Form.Label>
								<textarea onChange={(e) => this.setState({ items: e.target.value })}> </textarea>
							
							</div>
							
							<div style={{marginTop: "10px"}}>
							<Form.Label style={{marginRight: "10px"}} className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
								Time to Deliver
							  </Form.Label>
							<Form.Control
								as="select"
								className="mr-sm-2"
								id="inlineFormCustomSelect"
								custom
							  >
								<option value="0">12:00</option>
								<option value="1">1:00</option>
								<option value="0">2:00</option>
								<option value="0">3:00</option>
								<option value="0">4:00</option>
								<option value="0">5:00</option>
								<option value="0">6:00</option>
								<option value="0">7:00</option>
								<option value="0">8:00</option>
								<option value="0">9:00</option>
								<option value="0">10:00</option>
								<option value="0">11:00</option>
							  </Form.Control>
							  <Form.Control
								as="select"
								className="mr-sm-2"
								id="inlineFormCustomSelect"
								custom
							  >
								<option value="0">PM</option>
								<option value="1">AM</option>

							  </Form.Control>
							</div>
							<Col>
							  <Button style={{marginTop: "20px"}} type="submit">Schedule My Delivery!</Button>
							</Col>
						</Form>
					</Div>
				</div>
			);
		}
		
	};
	
}

export default Home;