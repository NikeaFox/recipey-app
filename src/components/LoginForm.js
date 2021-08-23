import React from "react";
import "../styles/Form.css";
function LoginForm() {
	return (
		<div className='card form-card'>
			<p className='card-welcome'>Welcome to Recipey</p>
			<form className='register'>
				<div className='input-container'>
					<label>Email</label>
					<input className='card input-box' type='email' name='email' />
				</div>
				<div className='input-container'>
					<label>Password</label>
					<input
						className='card input-box'
						type='password'
						name='password'
						minLength='8'
					/>
				</div>
				<button className='card def-btn'>Log In</button>
				<button className='card def-btn'>Sign Up</button>
				<p className='login-form-text'>
					Don't you have an account? <a href=''>Sign Up</a>
				</p>
				<p className='pass-reset-text'>Forgot your password?</p>
			</form>
		</div>
	);
}

export default LoginForm;
