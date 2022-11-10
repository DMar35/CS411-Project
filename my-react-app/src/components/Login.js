import React, { useState } from "react";

export const Login = (props) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault(); // page will be reloaded if this line isn't here
		console.log(email);
	}

	return (
		<div className="auth-form-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<label for='email'>Email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
				<label for='password'>Password</label>
				<input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password' />
				<button type='submit'>Login</button>
			</form>
			<div>Don't have an account?
				<button className="link-button" onClick={() => props.onFormSwitch('register')}>Sign Up</button></div>
		</div>
	)
}

