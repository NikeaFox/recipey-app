import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Homepage from "./components/Homepage";
import logo from "./img/avocado.svg";

function App() {
	return (
		<div className='App'>
			<div className='logo'>
				<img className='logo__img' src={logo} alt='' />
				<p className='logo__text'>recipey</p>
			</div>
			<RegisterForm />
			<LoginForm />
			<Homepage />
		</div>
	);
}

export default App;
