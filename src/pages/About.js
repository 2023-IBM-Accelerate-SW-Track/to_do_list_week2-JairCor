import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jair Coronado</div>
            <div className="brief_description">
              Hey I am Jair. I was born and raised in San Antonio, Texas. I am a HUGE car/aviation enthusiast.
              I also love some great cinematography. I have very little experience with javascript
              so this should be fun.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
