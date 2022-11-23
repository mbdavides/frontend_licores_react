import React, { useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import NotFound from './components/notfound/NotFound';
import './App.css';

export default function App() {
	const [loggedIn, setLogin] = React.useState(false);
	const [username, setUsername] = React.useState('');

	useEffect(() => {
		let account = sessionStorage.getItem("account");
		if (account) {
			account = JSON.parse(account);
			setUsername(account.user);
			setLogin(true);
		}
	}, []);
	
	const handleLogout = () => {
		sessionStorage.removeItem("account");
		setLogin(false);
		setUsername('');
	}
	
	const renderLogin = () => {
		return (
			<>
				<Login setlogin={setLogin}/>
			</>
		);
	};

	const renderApp = () => {
		return (
			<>
				<nav>
					<Link to="/">Home</Link>
					<Link to="about">About</Link>
					<button onClick={handleLogout}>Logout</button>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</>
		);
	};

	return (
		<>
			{loggedIn ? renderApp() : renderLogin()}
		</>
	);
}
