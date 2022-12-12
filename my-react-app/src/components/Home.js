import React, {useState, useEffect} from "react";
import axios from "axios";
import "./styles.css";
import NavBar from './NavBar';
import {Helmet} from 'react-helmet';

const Home = () => {
  const [query, setQuery] = React.useState("");
  const [events, setEvents] = React.useState([]);
  const [page, setPage] = React.useState({
    size: 10,
    number: 1,
  });
  const [pageTotal, setPageTotal] = React.useState(0);
  /* SPOTIFY */
  const CLIENT_ID = "ce0dd46338aa4f9493e8221b2f3fe15b";
  const CLIENT_SECRET = "b829b5d402fe48c7808b21ba142487ae";
  const[accessToken, setaccessToken] = useState("");

  useEffect(() => {
    var authParameters = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    /* API access token */
    fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setaccessToken(data.access_token))
  }, [])

  React.useEffect(() => {
    axios
      .get("https://app.ticketmaster.com/discovery/v2/events", {
        params: {
          apikey: "rO5NTqIFXjBktCjoh6i76wFYr6QdLe9u",
          keyword: query,
          locale: "*",
          page: page.number,
          size: page.size,
        },
      })
      .then((resp) => {
        setEvents(resp.data._embedded.events);
        setPageTotal(resp.data.page.totalPages);
      });
  }, [page, query]);

  function save() {
    alert('Event saved to your account!');
  }

  return (
      <div className="auth-form-container">
            {/* <Helmet>
                {/* <style>{'body { background-color: #70BD99; }'}</style> */}
                {/* <style>{'body { background: linear-gradient(#43A98C, #A5D5A7); }'}</style> */}
            {/* </Helmet> */} 
            <span className="main-home">Welcome Back</span>
            <span className="description-home">Search an event that you are interested in going in the search bar below. You can save an event by clicking the Interested button.</span>
      <input className="searchEvent"
        placeholder="Search for Music, Sports, and Arts events" 
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="custom-pagination">
        <input
          style={{ padding: "8px", width: "50px", border: "none"}}
          type="number"
          value={page.number}
          onChange={(event) => setPage({ ...page, number: event.target.value })}
        ></input>
        &nbsp;
        <button
          onClick={() =>
            setPage({
              ...page,
              number: page.number > 1 ? Number(page.number) - 1 : 0,
            })
          } className="previousButton"
        >
          Previous
        </button>
        &nbsp;
        <button
          onClick={() =>
            setPage({
              ...page,
              number:
                page.number < pageTotal ? Number(page.number) + 1 : page.number,
            })
          } className="nextButton"
        >
          Next
        </button>
      </div>
      <div>
        {events.map((event, index) => (
          <div className="item" key={index}>
            <div style={{ display: "flex", width: "1000px", alignContent:"center"}}>
              <div className="eventName display-linebreak">
                <a href={event.url} target="_blank">{event.name}</a>
                <button className="interestedButton" onClick={save}>Interested</button>
              </div>
            </div>

            <div className="eventDate">
                {event.dates.start.localDate}
            </div>

            <div style={{ display: "flex", width: "1000px", alignContent:"center"}}>
            <div className="eventInfo">
                {event.info || "no information for now"}
            </div>
            </div>

            <div style={{ display: "flex", width: "1000px"}}>
            <div className="eventVenue">
                {event._embedded.venues[0].name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
