import './App.css';
import React from "react";
import Login from "./Login";
import CssBaseline from "@material-ui/core/CssBaseline";

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
				<CssBaseline>
				  <header className="App-header">
					<Switch>
						<Route exact path ="/" render= {() => {
							return (
								<Redirect to="/login" />
							)
						}}/>
						<Route exact path="/login" component={Login}/>
					</Switch>

				  </header>
				</CssBaseline>
			</div>
		  </Router>
		);
	}
}



export default App;

