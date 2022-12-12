import React, { useState, useEffect } from "react";
import "./styles.css"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Card, Container} from 'react-bootstrap';

const Spotify = () => {
  const CLIENT_ID = "ce0dd46338aa4f9493e8221b2f3fe15b";
  const CLIENT_SECRET = "b829b5d402fe48c7808b21ba142487ae";
  const[accessToken, setaccessToken] = useState("");
  const[searchInput, setsearchInput] = useState("");
  const[albums, setAlbums] = useState([]);

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

  /* SEARCH FUNCTION */
  /* a function needs to be asynchronous if you ever want to use the keyword WAIT in it */
  async function search(){
    console.log("Search for " + searchInput);
    /* Get request using search to get Artist ID */
    var searchParameters = {
        method : 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : "Bearer " + accessToken
        }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => {return data.artists.items[0].id})

    console.log("Artist ID is " + artistID);

    /* Get request with Artist ID to get all of the playlists */
    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=20', searchParameters)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setAlbums(data.items);
        });
  }

    /* Display all of the albums */
    console.log(albums);

    return (
        <div className="auth-form-container">

            <input className="searchEvent"
                placeholder="Search for an artist" 
                onChange={(event) => setsearchInput(event.target.value)}
            />
            <button onClick={(e) => search(e)} className="signOutButton">Search</button>


                {albums.map((album, i) => {
                    console.log(albums);
                    return(
                        <div>
                            <img src={album.images[0].url}/>
                            <span>{album.name}</span>;
                        </div>
                    )
                })}

        </div>
    )
}
export default Spotify