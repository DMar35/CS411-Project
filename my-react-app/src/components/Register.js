import React, { useState } from "react";

export const Register = (props) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	}

	return (
		<div className="auth-form-container">
			<form className="register-form" onSubmit={handleSubmit}>
				<label for='first name'>First Name</label>
				<input value={firstName} onChange={(e) => setFirstName(e.target.value)} name='First Name' id='name' placeholder='First Name' />
				<label for='last name'>Last Name</label>
				<input value={lastName} onChange={(e) => setLastName(e.target.value)} name='Last Name' id='name' placeholder='Last Name' />
				<label for='email'>Email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
				<label for='password'>Password</label>
				<input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password' />
				<button type='submit'>Login</button>
			</form>
			<p>Already have an account?</p><button onClick={() => props.onFormSwitch('login')}>Login</button>
		</div>
	)
}

