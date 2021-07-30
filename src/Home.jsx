import React from "react";
import skill from "./skill.png";
import back from "./homeBack.png";
import { NavLink } from "react-router-dom";
function Home(){
    return (
        <main id="main" style={{ backgroundImage: `url(${back})` }}>
        <nav id="homeNav">
            <div id="homeNavImg">
            <img src={skill} alt="homeLogo" />
            </div>
            <div id="homeNavlinks">
            <NavLink to="/History"> 01.History </NavLink>
            <NavLink to="/Team"> 02.Team </NavLink>
            </div>
        </nav>
        <div id="losAngMon">
         <h1>LOSANGELES<br/><span>MOUNTAINS</span></h1>
        </div>
        </main>
    );
}

export default Home;