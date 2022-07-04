import getAccessToken from "./auth";

import request from "./request";
const getCurrentPlayback = async () => {
    const  {access_token}   =  await getAccessToken();
    try {
    const response =  request.get('me/player/currently-playing',{
        headers: {
            'Authorization': `Bearer ${access_token}`
          }
    })
    return (await response).data; 
    } catch(error){
        console.log("error making api request ", error.message);
    }
}

export default getCurrentPlayback;




