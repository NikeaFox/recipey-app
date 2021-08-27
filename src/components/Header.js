import React from "react";
import logo from "../img/avocado.svg";
import { Link } from "react-router-dom";
function Header(props) {
	const { user, handleLogout } = props;

 	return (
		<div className='logo'>
			<Link to="/">
				<img className='logo-img' src={logo} alt='' />
			</Link>
			<p className='logo-text'>recipey</p>
			<div className='login-btn-wrapper'>
				{user ? (
					<Link to='/log'>
						<button onClick={handleLogout} className='card login-btn-home'>
							Log Out
						</button>
					</Link>
				) : (
					<Link to='/log'>
						<button className='card login-btn-home'>Log In</button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default Header;
