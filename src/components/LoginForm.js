import React from "react";
import "../styles/Form.css";
import { Link, useHistory } from "react-router-dom";
import fire from "../fire";
import Header from "./Header";
function LoginForm(props) {
	const history = useHistory();

	const {
		email,
		setEmail,
		password,
		setPassword,
		error,
		setError,
		clearErrors,
		clearInputs,
	} = props;

	const handleLogin = (e) => {
		e.preventDefault();
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((err) => {
				setError(err.message);
			})
			.then((auth) => {
				if (auth) {
					history.push("/home");
					localStorage.setItem("hasAccount", true);
					clearErrors();
					clearInputs();
				}
			});
	};

	return (
		<React.Fragment>
			<Header />
			<div className='card form-card'>
				<p className='card-welcome'>Welcome to Recipey</p>
				<form className='register'>
					<div className='input-container'>
						<label>Email</label>
						<input
							required
							className='card input-box'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='input-container'>
						<label>Password</label>
						<input
							required
							className='card input-box'
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<p className='error'>{error}</p>
					<button onClick={handleLogin} className='	card def-btn'>
						Log In
					</button>
					<p className='login-form-text'>
						Don't you have an account?
						<span className='reg-form-link'>
							<Link to='/register'>Sign Up</Link>
						</span>
					</p>
					<p className='pass-reset-text'>Forgot your password?</p>
				</form>
			</div>
		</React.Fragment>
	);
}

export default LoginForm;
