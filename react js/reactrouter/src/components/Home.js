import React, { useState } from "react";
import "../css/home.css";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div>
        <img
          id="headerimg"
          className="container-fluid"
          width="100%"
          height="540px"
          src="https://i2r9x7i6.stackpathcdn.com/app/uploads/2020/02/Library-Lovers-1120x630.jpg"
        />
      </div>
      <h4 className="center">
        <p className="pagetitle">Welcome to Blog</p>
      </h4>
      <div className="row" id="card_row">
        <div className="col s12 m4">
          <div className="card" id="firstCard">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <span className="card-title">
                <b>Nature Is Life</b>
              </span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card" id="firstCard">
            <div className="card-image">
              <img src="https://cdn.mos.cms.futurecdn.net/8bEfxy8skS6fUVZnfaLWxj.jpg" />
              <span className="card-title">
                <b> World Technology</b>
              </span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card" id="firstCard">
            <div className="card-image">
              <img src="https://i.pinimg.com/originals/e0/f5/69/e0f569bdfc3526d92433ef88494dc665.jpg" />
              <span className="card-title">
                <b>Read History</b>
              </span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
