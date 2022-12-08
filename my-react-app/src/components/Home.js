import React from "react";
import axios from "axios";
import "./styles.css";

const Home = () => {
  const [query, setQuery] = React.useState("");
  const [events, setEvents] = React.useState([]);
  const [page, setPage] = React.useState({
    size: 10,
    number: 1,
  });
  const [pageTotal, setPageTotal] = React.useState(0);

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

  return (
    <div className="auth-form-container">
      <p>This is a paragraph and I am writing on the home page</p>
      <p>This is another paragraph, hi hey hello whatsup yo</p>
      <span className="main">Welcome Back</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet tempor
        pulvinar at arcu libero sit id dignissim sollicitudin.
      </p>
      <input
        placeholder="Enter Event to Search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="custom-pagination">
        <div className="page-info">
          <div>
            Page Number:{" "}
            <span style={{ fontWeight: "bold" }}>{page.number}</span>
          </div>
          <div>
            Page size: <span style={{ fontWeight: "bold" }}>{page.size}</span>
          </div>
          <div>
            Page Total: <span style={{ fontWeight: "bold" }}>{pageTotal}</span>
          </div>
        </div>
        <input
          style={{ padding: "8px" }}
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
          }
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
          }
        >
          Next
        </button>
      </div>
      <div className="list">
        {events.map((event, index) => (
          <div className="item" key={index}>
            <div style={{ display: "block" }}>
              <div>
                <a href={event.url}>{event.name}</a>
              </div>
              <div className="one-line">
                {event.info || "no information for now"}
              </div>
            </div>
            <div>
              <div style={{ color: "silver" }}>
                {event.dates.start.localDate}
              </div>
              <div
                className="one-line"
                style={{ color: "silver", width: "120px" }}
              >
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
