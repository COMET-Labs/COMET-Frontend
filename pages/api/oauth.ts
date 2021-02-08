import { getURLWithQueryParams } from "../../components/login-signup/login/auth";
// import Spinner from "../../assets/icons/Spinner";
import axios from 'axios';

const Oauth = async (req, res) => {
    const LINKEDIN_URL = getURLWithQueryParams(
        "https://www.linkedin.com/oauth/v2/accessToken",
        {
          grant_type: "authorization_code",
          code: req.query.code,
          redirect_uri: process.env.LINKEDIN_REDIRECT,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET
        }
      );
      let tok;
      let resp = await fetch(LINKEDIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
      if (resp.ok) tok = await resp.json();
      try{
        let { access_token, expires_in } = tok;
        let response = await axios.post("http://localhost:8000/auth/linkedInLogin",{access_token})
        if(response.status === 200)
        {
          console.log(response);
          res.redirect(`http://localhost:3000/portfolio`)
        }
        else{
            console.log(response);
            res.redirect(`http://localhost:3000/login`)
        }
      }
      catch(err){
        res.redirect(`http://localhost:3000/login`)
      }
};

export default Oauth