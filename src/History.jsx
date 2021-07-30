import React from "react";
import navLogo from "./historyLogo.png";
import back from "./historyBack.png";
import { NavLink } from "react-router-dom";
import caro1 from "./caro1.png";
import caro2 from "./caro2.png";
import Carousel from "react-bootstrap/Carousel";
function History(){
    return (
        <>
        <main id="main" style={{ backgroundImage: `url(${back})` }}>
        <nav id="historyNav">
            <div id="historyNavImg">
            <img src={navLogo} alt="historyLogo" />
            </div>
            <div id="historyNavlinks">
            <NavLink to="/History"> 01.History </NavLink>
            <NavLink to="/Team"> 02.Team </NavLink>
            </div>
        </nav>
        <section id="historyText">
<div id="onehis">
<span id="one">01.</span><span id="his">History</span>
</div>
<div id="acText">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
</div>
        </section>
        <div id="outer">
            <div id="inner">
  <Carousel>
      <Carousel.Item>
      <img src={caro1} alt="image1" className="d-block w-100" style={{height:"20vh"}}/>
          <Carousel.Caption>
              
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={caro2} alt="image2" className="d-block w-100" style={{height:"20vh"}}/>
          <Carousel.Caption>
           
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={caro1} alt="image3" className="d-block w-100" style={{height:"20vh"}}/>
          <Carousel.Caption>
              
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={caro2} alt="image4" className="d-block w-100" style={{height:"20vh"}}/>
          <Carousel.Caption>
              
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  </div>
  </div>
        </main>

        </>
    );
}

export default History;