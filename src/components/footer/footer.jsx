import React from "react";
import "./footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faYoutube, faDiscord, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';



export const Footer=()=>{
    return(
        <div id="footer">
       
      
       <div className="icons">
       <FontAwesomeIcon icon={faGithub}/>
       <FontAwesomeIcon icon={faYoutube} />
       <FontAwesomeIcon icon={faFacebook} />
       <FontAwesomeIcon icon={faLinkedin} />
       <FontAwesomeIcon icon={faDiscord} />
       </div>

      <p>copyright@<span>terms&conditions.</span></p>
        </div>
    )
}