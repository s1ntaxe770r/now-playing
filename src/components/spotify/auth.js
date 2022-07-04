import qs from 'qs';
import request from "./request";


const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
const auth_token = window.btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`, 'utf-8');
let token = "";
// const getAuth =  async() => {
//    const headers = {
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${auth_token}`
//     }
//   };
//   const data = {
//     grant_type: 'refresh_token',
//     SPOTIFY_REFRESH_TOKEN,
//     // 'scope':'user-read-playback-state user-read-currently-playing '
//   };
// return request.post(
//       'https://accounts.spotify.com/api/token',
//       qs.stringify(data),
//       headers
//     )
//    .then(response => {return response.data.access_token} )
//     .catch(e => {console.log(e)});

// };


const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth_token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
};




export default getAccessToken;











