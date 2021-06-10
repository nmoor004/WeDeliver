import React from "react";
import Home from "./Home";
import Login from "./Login";


import {
	Route,
	Switch,
	Link,
	Redirect,
	BrowserRouter as Router
} from "react-router-dom";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "React",
			isUserAuthenticated: true
    };

  }
	render () {
	  return (
		  <Router>
			<div style={{backgroundColor: "#ffffff"}} className="App">

				  <header className="App-header">
					<Switch>
						<Route exact path ="/" render= {() => {
							return (
								<Redirect to="/login" />
							)
						}}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/home" component={Home}/>
					</Switch>

				  </header>
			</div>
		  </Router>
		);
	}
}



export default App;

