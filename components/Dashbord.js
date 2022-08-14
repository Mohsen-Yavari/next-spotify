
import Sidebar from "./Sidbar";
import Body from "./Body";
import Right from "./Right";
import { useEffect, useState } from "react";

import SpotifyWebApi from "spotify-web-api-node";

import { useRecoilState } from "recoil";
import { playingTrackState } from "../atom/playerAtom";
import { useSession } from "next-auth/react";

import {Player} from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});


function Dashbord() {

  const { data: session } = useSession();
  const { accessToken } = session;

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <main className="flex min-height-screen bg-black lg:pb-24">
        <Sidebar />
        <Body 
        spotifyApi={spotifyApi}
        chooseTrack={chooseTrack}
        />
        <Right 
         spotifyApi={spotifyApi}
         chooseTrack={chooseTrack}
        />

        <div>
          <Player />
        </div>
    </main>
  )
}

export default Dashbord