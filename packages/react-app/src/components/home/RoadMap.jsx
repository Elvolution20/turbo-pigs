import React from "react";

// import { Icon } from '@iconify/react';
import './style.css'

export default function RoadMap() {

  return (
    <div className="roadmapContainer" id="roadmapContainer">
      <div className="roadmapBox">
        <div className="innerroadmap">
          <h1>TURBO PIGS ROADMAP</h1>
          <div className="roadmapContent">
            <div className="roadmapLeft">
              <div className="tp-launch">
                <img src="./assets/image/Launch.png" width="100%" />
                <div className="tp-launch-txt">
                  <h2>TURBO PIGS LAUNCH</h2>
                  <p>Introducing the PIGGYVERSE, it's inhabitants. Growing a strong pig sty of 2,222 Piggies.</p>
                </div>
              </div>
              <div className="tp-phase2">
                <img src="./assets/image/Turbo-Phase.png" width="100%" />
                <div className="tp-phase2-txt">
                  <h2>GAME LAUNCH</h2>
                  <p>The Piggyverse game is where your NFTs come to life. Engage in thrilling battles, strategic challenges, and competitive play, using your unique NFT game cards. It's not just about collecting; it's about testing your strategies and mastering the art of conquest in the exhilarating world of GameFi. Join the Piggyverse game, where every card is a key to your next adventure.</p>
                </div>
              </div>
            </div>
            <div className="roadmapRight">
              <div className="staking-economy">
                <img src="./assets/image/Collect.png" width="100%" />
                <div className="staking-economy-txt">
                  <h2>NFT STAKING</h2>
                  <p>PiggyVerse Economy grows through use of the Staking Mechanism to reward $OINK to NFT Stakers.</p>
                </div>
              </div>
              <div className="piggies-factory"> 
                <img src="./assets/image/Turbo-Farm.png" width="100%" />
                <div className="piggies-factory-txt">
                  <h2>PIGGIES FARM</h2>
                  <p>The Piggyverse Farm is not just a breeding ground; it's a strategic hub that adds depth, excitement, and endless possibilities to your Piggyverse journey. Create your own legacy by breeding, collecting, and battling with your unique game cards. The Piggyverse awaits, where the bonds of love and the thrill of strategy converge in a world of turbocharged adventure!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ownBox">
        <div className="innerownBox">
          <h1>WHY OWN TURBO PIGGIES?</h1>

          <div className="earnBox ownChild">
            <div className="innerown-img size">
              <img src="./assets/image/stake.png" />
            </div>
            <div className="innerown-text">
              <h2>EARN</h2>
              <p>
                Turbo Piggies can be staked to earn $OINK, which are our Piggyverse Token. This enables marketplace purchases such as leveling your NFT, naming your Piggies + adding a personal Backstory. <br /> 
                Plus future gaming bonuses or even exclusive future NFT mints.
              </p>
            </div>
          </div>
          <div className="playBox ownChild">
            <div className="innerown-img">
              <img src="./assets/image/Turbo-Play.png" />
            </div>
            <div className="innerown-text">
              <h2>PLAY</h2>
              <p>
                Turbo Pigggies are not just an NFT that is awesome to look at. We are in the process of creating full blown games to utilise them in. <br /> 
                These will range from our 2D competitive 'Turbo Pigs Game', up to our 3D 'PiggyVerse Arcade'. Get ready to play together and have some fun.</p>
            </div>
          </div>
          <div className="collectBox ownChild">
            <div className="innerown-img">
              <img src="./assets/image/Evolve.png" width="50px" />
            </div>
            <div className="innerown-text">
              <h2>Collect NFTs, Evolve, and Dominate!</h2>
              <p>
              Your adventure begins with collecting NFTs. Merge them to evolve into unique game cards and unleash their power to dominate challenges and competitions in the thrilling world of GameFi!
              </p>
            </div>
          </div>
          <div className="communityBox ownChild2">
            <div className="innerown-img">
              <img src="./assets/image/Turbo-Com.png" />
            </div>
            <div className="innerown-text">
              <h2>COMMUNITY</h2>
              <p>In the Piggyverse, our community is the heartbeat of our journey. We unite to strategize, compete, and celebrate achievements. Join us in this vibrant hub of camaraderie and collaboration, where your voice matters, your adventures go beyond NFTs, and friendships are forged through shared excitement and victories.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
