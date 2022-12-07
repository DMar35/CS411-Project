import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import { Link } from 'react-router-dom';
import "./styles.css"
import NavBar from './NavBar';

const client_id = '363934785082-5t6e6q3k2g9k1ntgqca39j1osvuqlr28.apps.googleusercontent.com';

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault(); // page will be reloaded if this line isn't here
		console.log(email);
	}

	const [user, setUser] = useState({})

	const handleCallbackResponse = (response) => {
		console.log("Encoded JWT ID token: " + response.credential);
		var userObject = jwt_decode(response.credential);
		console.log(userObject);
		setUser(userObject)
		document.getElementById('signInDiv').hidden = true;
	}

	const handleSignOut = (e) => {
		setUser({});
		document.getElementById("signInDiv").hidden = false;
	}

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: "363934785082-m589krbe4khvt6hhat1ph7meh16ajq42.apps.googleusercontent.com",
			callback: handleCallbackResponse
		});

		google.accounts.id.renderButton(
			document.getElementById("signInDiv"),
			{ theme: "outline", size: "large"}
		);
		google.accounts.id.prompt();
	}, []);


	return (
	<div>
		<div className="auth-form-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<label for='email'>Email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
				<label for='password'>Password</label>
				<input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password' />
				<button type='submit'>Login</button>
				<div id="signInDiv"></div>
				{
					Object.keys(user).length != 0 &&
					<button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
				}
				{
					user && 
					<div>
						<img src={user.picture}></img>
						<h3>{user.name}</h3>
					</div>
				}

			</form>
			<Link to="/register" variant="body2">
				Not have an account ? Sign up here
			</Link>
		</div>
	</div>
	)
}

export default Login;
