import React from "react";
import Header from "./Header";
import fire from "../fire";
import { IoIosSearch } from "react-icons/io";
function Homepage(props) {
	let userName = "Guest";
	const { user } = props;
	const handleLogout = () => {
		fire.auth().signOut();
	};
	if (user) {
		userName = localStorage.getItem("name");
	}

	return (
		<React.Fragment>
			<Header user={user} handleLogout={handleLogout} />
			<div className='home-container'>
				<div className='welcome-section'>
					<p className='welcome-text'>
						Welcome <span>{userName}</span> ! <br /> What will you cook today,
						<br /> have anything in mind? <br />
						Or want some ideas?
					</p>
					<form className='search-form'>
						<input
							placeholder='Check some recipes'
							type='text'
							className='search-bar card input-box '
						/>
						<button onClick={handleLogout} className='search-icon'>
							<IoIosSearch />
						</button>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Homepage;
