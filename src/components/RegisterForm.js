import React from "react";
import "../styles/Form.css";
import fire from "../fire";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function RegisterForm(props) {
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
		name,
		setName,
	} = props;

	const handleRegister = (e) => {
		e.preventDefault();
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => {
				setError(err.message);
			})
			.then((auth) => {
				if (auth) {
					history.push("/log");
					localStorage.setItem('name',name)
				}
				clearErrors();
				clearInputs();
			});
			
	};

	return (
		<React.Fragment>
			<Header />
			<div className='card form-card'>
				<p className='card-welcome'>Welcome to Recipey</p>
				<form className='register'>
					<div className='input-container'>
						<label>Your Name</label>
						<input
							className='card input-box'
							required
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
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
					<button className=' card def-btn' onClick={handleRegister}>
						Sign In
					</button>
				</form>
			</div>
		</React.Fragment>
	);
}

export default RegisterForm;
