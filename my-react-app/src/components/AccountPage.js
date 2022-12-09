import React, { useState, useEffect } from "react";
import "./styles.css"

const Account = () => {
    const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); // page will be reloaded if this line isn't here
		console.log(email);
	}
    function send() {
        alert('All of the saved events are sent to your email.');
      }

    return (
        <div className="auth-form-container">
            <span className="main-account">My Account</span>
            <label for='sendEmail'>Enter your email to get the events you saved:</label>
			<input classname="sendEmailInput" value={email} onChange={(e) => setEmail(e.target.value)} type='sendEmail' placeholder='youremail@gmail.com' id='email' name='email' />
            <div className="eventName display-linebreak">
                <button className="sendButton" onClick={send}>Send</button>
              </div>
        </div>
    )
}
export default Account