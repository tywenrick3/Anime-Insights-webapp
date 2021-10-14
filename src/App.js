import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
