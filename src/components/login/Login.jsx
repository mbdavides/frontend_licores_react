import React from 'react';
import loginService from '../../services/login';
import './Login.css';
//import Label from "../commons/label/Label";
//import Input from "../commons/input/Input";

export default function Login({setlogin}) {
	//const [username, setUsername] = React.useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const user = event.target.elements.username.value;
			const pass = event.target.elements.password.value;
			let credentials = {user, pass};
			await loginService
				.login(credentials)
				.then(response => {
					let account = JSON.stringify({ user, pass });
					sessionStorage.setItem("account", account);
					setlogin(true);
				});
		} catch (error) {
			alert("Invalid username or password");
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Email</label>
					<input type="text" name="username" id="username" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}
