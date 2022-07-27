import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero"></div>

      <div className="cards">
        <div className="card">
          <img src="/imgs/jordans.jpg" alt="air jordans"></img>
          <div className="details">
            <h2>Air Jordan</h2>
            <p>Take Flight</p>
            <button>Find Air Jordans</button>
          </div>
        </div>

        <div className="card">
          <img src="/imgs/yeezy.jpg" alt="yeezys"></img>
          <div className="details">
            <h2>Adidas</h2>
            <p>Impossible is NOTHING</p>
            <button>Find Adidas</button>
          </div>
        </div>

        <div className="card">
          <img src="/imgs/nike.jpg" alt="nikes"></img>
          <div className="details">
            <h2>Nike</h2>
            <p>Just Do It</p>
            <button>Find Nike's</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
