import "./App.css";
import Hiola from "./pages/Hiola/Hiola";
import Time from "./pages/time/Time";
import Welcome from "./pages/welcome/Welcome";
import Logo from "./component/logo/Logo";
import Rubbish from "./component/rubbish/Rubbish";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Choosen from "./pages/choosen/Choosen";

function App() {
	return (
		<div className="App">
			<Logo />
			<Router>
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route path="/hiola">
						<Hiola />
					</Route>
					<Route path="/time">
						<Time />
					</Route>
					<Route path="/choosen">
						<Choosen />
					</Route>
				</Switch>
			</Router>
			<Rubbish />
		</div>
	);
}

export default App;
