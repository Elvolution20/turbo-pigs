import React, { useState ,useEffect  } from "react";
export default function Team() {

  return (
    <div className="teamContainer" id = "teamContainer">
      <div className="verse-title">
        <h1 >TEAM</h1>
      </div>
      <div className="team-list">
        
        <div className="verseBox">
          <div className="founder">
            <img src="./assets/image/founder.jpg" />
            <h2>TURBO</h2>
            <div className="team-text">
              <p>
                FOUNDER OF TURBO PIGS
              </p>
            </div>
            <div className="">
              <a href="https://Twitter.com/" target="_blank">
                <span className="team-twitter">
                    <img src='./assets/image/twitter.png'/>
                </span>
              </a>
            </div>
          </div>

          <div className="artist">
            <img src="./assets/image/artist.jpg" />
              <h2>DARNET</h2>
              <div className="team-text">
                <p>
                  NFT ARTIST
                </p>
              </div>
              <div className="">
                <a href="https://Twitter.com/" target="_blank">
                  <span className="team-twitter">
                      <img src='./assets/image/twitter.png' />
                  </span>
                </a>
              </div>
          </div>

          <div className="dev">
            <img src="./assets/image/dev.jpg" />
            <h2 className="team-text">SQUIDWARD</h2>
            <div className="team-text">
              <p>
                FULL STACK DEV
              </p>
            </div>
            <div className="">
              <a href="https://www.linkedin.com/in/akira-mori" target="_blank">
                <span className="team-twitter">
                    <img src='./assets/image/linkedin_1.png' />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
