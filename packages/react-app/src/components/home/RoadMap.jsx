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
                  <p>Launching of our Community Game to Earn Rewards . Community Members and Holders will be able to use their Turbo Piggies for accessability and tests.</p>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit, harum odio perspiciatis illum eligendi nobis atque consequuntur iste magni.</p>
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
              <img src="./assets/image/potion2.png" />
            </div>
            <div className="innerown-text">
              <h2>COLLECT + EVOLVE</h2>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dignissimos asperiores officiis praesentium culpa recusandae. Sequi, quos quia error optio dignissimos possimus corporis velit dolor eum, magni ratione temporibus assumenda libero quod odio. Culpa deserunt consectetur suscipit. Modi totam enim, facilis laborum rem facere, dolorum voluptatum fugiat error saepe est.
              </p>
              
            </div>
          </div>
          <div className="communityBox ownChild">
            <div className="innerown-img">
              <img src="./assets/image/Turbo-Com.png" />
            </div>
            <div className="innerown-text">
              <h2>COMMUNITY</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore, totam accusantium praesentium magnam voluptatem voluptates ipsa atque ducimus cum aut vel, sit aliquam placeat, maiores iure reprehenderit voluptatibus dolorum nesciunt consequatur. Veritatis in voluptatum temporibus, saepe explicabo minima placeat consequatur culpa quas eveniet debitis laboriosam eos enim autem alias?</p>
            </div>
          </div>
          <div className="chatbtnBox">
            <a href="/discord" target="_blank">
              <img src='./assets/image/discord1.png' width='20px' height='20px' style={{ marginRight: '10px' }} />
              COME CHAT WITH US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
