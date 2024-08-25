import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/anishkumar9605/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?w=740&t=st=1707927675~exp=1707928275~hmac=36be74a4b56f3017d8f5f68422cb476fea5d6c07a28cc996553266194dab68ef"
              alt="Founder"
            />
            <Typography>Anish Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @Anish.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="#"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>
            <a href="https://www.instagram.com/anishkumar9605/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
