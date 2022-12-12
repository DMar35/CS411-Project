import axios from "axios";
import React, { useState, useEffect } from "react";
import { getUser } from "../store/user";
import "./styles.css";

const Interested = () => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    // axios
    //   .get("https://localhost:3000/getEvents", {
    //     params: {
    //       user: userStore.user,
    //     },
    //   })
    //   .then((res) => {
    //     setEvents(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    const key = `events_${getUser()}`;
    const events = JSON.parse(localStorage.getItem(key) || "[]");
    setEvents(events);
  }, []);

  return (
    <div className="auth-form-container">
      <div>
        <span className="title">This is the Interested page.</span>
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
