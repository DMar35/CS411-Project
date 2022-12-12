import axios from "axios";
import React, { useState, useEffect } from "react";
import { getUser } from "../store/user";
import "./styles.css";

const Interested = () => {
  const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); // page will be reloaded if this line isn't here
		console.log(email);
	}
    function send() {
        alert('All of the saved events are sent to your email.');
      }

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const key = `events_${getUser()}`;
    const events = JSON.parse(localStorage.getItem(key) || "[]");
    setEvents(events);
  }, []);

  return (
    <div className="auth-form-container">
      <span className="main-account">My Account</span>
      <span className="description-explore">Enter your email to get the events you saved:</span>
			<input className="searchArtist" value={email} onChange={(e) => setEmail(e.target.value)} type='sendEmail' placeholder='youremail@gmail.com' id='email' name='email' />
            <div className="eventName display-linebreak">
                <button className="sendButton" onClick={send}>Send</button>
              </div>

      <div>
        {events.map((event, index) => (
          <div className="item" key={index}>
            <div
              style={{
                display: "flex",
                width: "1000px",
                alignContent: "center",
              }}
            >
              <div className="eventName display-linebreak">
                <a href={event.url} target="_blank" rel="noreferrer">
                  {event.name}
                </a>
              </div>
            </div>

            <div className="eventDate">{event.dates.start.localDate}</div>

            <div
              style={{
                display: "flex",
                width: "1000px",
                alignContent: "center",
              }}
            >
              <div className="eventInfo">
                {event.info || "no information for now"}
              </div>
            </div>

            <div style={{ display: "flex", width: "1000px" }}>
              <div className="eventVenue">{event._embedded.venues[0].name}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default Interested;