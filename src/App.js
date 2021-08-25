import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Homepage from "./components/Homepage";
import { useState, useEffect } from "react";
import fire from "./fire";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [user, setUser] = useState("");

	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};

	const clearErrors = () => {
		setError("");
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if(user) {
				setUser(user);
			}else {
				setUser('');
			}
		})
	}

	useEffect(() => {
		authListener();
	},[])
 
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Redirect to='/home' />
					</Route>{" "}
					<Route path='/log'>
						<LoginForm
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
							error={error}
							setError={setError}
							clearErrors={clearErrors}
							clearInputs={clearInputs}
						/>{" "}
					</Route>{" "}
					<Route path='/register'>
						<RegisterForm
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
							error={error}
							setError={setError}
							clearErrors={clearErrors}
							clearInputs={clearInputs}
							name={name}
							setName={setName}
						/>{" "}
					</Route>{" "}
					<Route path='/home'>
						<Homepage 	
							user={user}
						/>
					</Route>{" "}
				</Switch>{" "}
			</Router>{" "}
		</div>
	);
}

export default App;
