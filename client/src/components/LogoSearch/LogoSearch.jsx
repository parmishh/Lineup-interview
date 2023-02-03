import React from "react";

import Logo from "../../img/logo.png";
import PYh from "../../img/PYh.gif";
import Lo from "../../img/search.png";
import './LogoSearch.css'
import './nn.js'
import { UilSearch } from '@iconscout/react-unicons'

import img from "../../img/search.png";

var mm="https://devdocs.io/"+document.querySelector('#poke')+"/"

const LogoSearch = () => {
  return (
    
    <div className="LogoSearch">
      <a href="http://localhost:3000/home">
      <img src={PYh} alt="" />
      </a>
      <div className="Search" >
          <input  type="search" id="poke"   placeholder="#Documentations" ></input>
            
         
         
           
            <div className="s-icon" >
          <a href="https://devdocs.io/">
          <UilSearch/>
          </a>
          </div>
          
            
       
          
      </div>
    </div>
  );
};



export default LogoSearch;
