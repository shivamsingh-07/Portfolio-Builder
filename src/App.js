import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Template from "./components/Template";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Portfolio from "./components/templates/Basic";
// import Data from "./components/templates/resumeData";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/template" component={Template} />
				<Route path="/fillDetail" component={Form} />
				<Route path="/preview" component={Preview} />
				<Route path="/portfolio" component={Portfolio} />
			</Switch>
		</Router>
	);
}

export default App;
