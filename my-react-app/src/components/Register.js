import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Register = (props) => {
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
				<span className="main-login">Create an Account</span>
				<span className="description">Discover cheaper prices with us.</span>
				<label for='first name'>First Name</label>
				<input value={firstName} onChange={(e) => setFirstName(e.target.value)} name='First Name' id='name' placeholder='First Name' />
				<label for='last name'>Last Name</label>
				<input value={lastName} onChange={(e) => setLastName(e.target.value)} name='Last Name' id='name' placeholder='Last Name' />
				<label for='email'>Email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
				<label for='password'>Password</label>
				<input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password' />
				<button type='submit' className='button'>Register</button>
			</form>
			{/* <span>By clicking Register, you agree with our Terms & Condition</span> */}
			<span>
				Already have an account? &nbsp;
				<Link to="/login" variant="body2" className="cta">Login</Link>
			</span>
		</div>
	)
}

export default Register;
