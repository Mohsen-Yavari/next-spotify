import React from 'react';

import Sidebar from "./Sidbar";
import Body from "./Body";
import Right from "./Right";

import SpotifyWebApi from "spotify-web-api-node";



const spotifyApi = new SpotifyWebApi({
  // clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashbord() {
  return (
    <main>
        <Sidebar />
        <Body />
        <Right />
    </main>
  )
}

export default Dashbord