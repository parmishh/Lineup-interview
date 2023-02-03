import React from "react";

import Home from "../../img/home.png";

import vv from "../../img/video2.webp";

import Comment from "../../img/comment.png";

import { Link } from "react-router-dom";


const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      
     
      
      
      <a href="https://videocallweb-app.herokuapp.com/">
      <img src={vv} alt="" />
      </a>
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
