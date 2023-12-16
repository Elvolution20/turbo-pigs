import React, { useState ,useEffect  } from "react";
import { StakeNFTSlider } from './';
import { NFT_IMAGE_URL, NFT_IMAGE_EXTENSION } from "../../constants";

export default function Stake({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  contract,
  signer,
  remainTokenCount,
}) {

  const [stakedTokens, stakedTokensState] = useState([]);
  const [mintedTokens, mintedTokensState] = useState([]);
  const [dailyPorks, dailyPorkState] = useState(0);
  const [totalPorks, totalPorkState] = useState(0);
  const [nftData,   setNFTState] = useState([{}]);
  const [claiming, setClaming] = useState(false);

  const setNFTData = () => {
    var data = [];
    
    for(var j = 0; j< stakedTokens.length; j++){
      var _subdata = {"tokenId" : "", "imageUrl" : "", isStaked: false};
      _subdata.tokenId = stakedTokens[j];
      _subdata.imageUrl = NFT_IMAGE_URL + stakedTokens[j] + NFT_IMAGE_EXTENSION;
      _subdata.isStaked = true;
      data.push(_subdata);
    }
    for(var i = 0; i< mintedTokens.length; i++){
      var _subdata = {"tokenId" : "", "imageUrl" : "", isStaked: false};
      _subdata.tokenId = mintedTokens[i];
      _subdata.imageUrl = NFT_IMAGE_URL + mintedTokens[i] + NFT_IMAGE_EXTENSION;
      _subdata.isStaked = false;
      data.push(_subdata);
    }
    
    console.log(data);
    return data;
  }

  const bigNumArrToArr = (bigArr) =>{
    var arr = [];
    for(var i =0; i < bigArr.length; i++){
      arr.push(parseInt(bigArr[i]["_hex"]));
    }
    return arr;
  }

  useEffect(() => {
    async function getUserMintState(){
      if(address){
        try {
          //Get user minted tokens
          const mintedTokenFunc = contract["Pigs"].connect(signer)["walletOfOwner"];
          const mintedTokenIds = await mintedTokenFunc(address);
          mintedTokensState(bigNumArrToArr(mintedTokenIds))

          //Get user staked tokens
          const stakedTokenFunc = contract["PigsStaking"].connect(signer)["getStakedTokens"];
          const stakedTokenIds = await stakedTokenFunc(address);
          stakedTokensState(bigNumArrToArr(stakedTokenIds))

          //Get user daily reward tokens
          const dailyPorkFunc = contract["PigsStaking"].connect(signer)["calcRewardPerDay"];
          const dailyPorkToken = await dailyPorkFunc(address);
          dailyPorkState(parseInt(dailyPorkToken["_hex"]))
          console.log("Daily Pork Tokens = " + dailyPorks);

          //Get user total reward tokens
          const totalPorkFunc = contract["PigsStaking"].connect(signer)["getAllRewardedToken"];
          const totalPorkTokens = await totalPorkFunc(address);
          totalPorkState(parseInt(totalPorkTokens["_hex"]))
          console.log("Total Pork Tokens = " + totalPorks);

        } catch (e) {
          console.log(e);
        }
        
      }
    }
    getUserMintState();
  }, [address, contract]);

  useEffect(() => {
    async function setNFTslideData(){
      setNFTState(setNFTData());
    }
    setNFTslideData();
  }, [mintedTokens, stakedTokens]);

  const claimAllHandler = async () => {
    setClaming(true);
    try {
      const stakeFunction = contract["PigsStaking"].connect(signer)["claimAll"];
      const hash = await stakeFunction(address);
      setClaming(false);
    } catch (e) {
      setClaming(false);
      console.log(e);
    }
  };

  return (
    <div className="stakeContainer" id="stakeContainer">
      <div className="joinBox">
        <div className="joinText">
          <h1>JOIN THE PIGGY VERSE</h1>
          <p>Introducing the "Piggyverse Chronicles" – a one-of-a-kind NFT project that immerses you in an anime-inspired alternative universe filled with turbocharged Piggy warriors on a mission to save their beloved planet from the clutches of the menacing Overlords.</p>
          <p>But it's not just about epic battles and intergalactic conquests; it's also a story of love, rivalry, and proving who's the ultimate Super Piggy.</p>
          <a href="/discord" target="_blank">
            <img src='./assets/image/discord1.png' width='20px' height='20px' style={{ marginRight: '20px' }} />
            JOIN THE PIGGYVERSE
          </a>
        </div>
      </div>
      <div className="stakeBox">
        <div className="innerstakeBox">
          {
            // nftData.length == 0 && (
              true && (
              <>
                <div className="imgBox">
                  <img src="./assets/image/Turbo-Banner.png" />
                </div>
                <div className="stakeText">
                  {/* <p>STAKING AVAILABLE ON LAUNCH!</p> */}
                </div>
              </>
            )
          }
          {
            // nftData.length != 0 
            false && (
              <>
                <div className="Text-stake">
                  <div className="stakeNFT-text">
                    <p>Minted Tokens: {mintedTokens.length + stakedTokens.length}</p>
                    <p>Staked Tokens: {stakedTokens.length}</p>
                  </div>
                  <div className="stakeNFT-text">
                    <p>Daily Porks: {dailyPorks}</p>
                    <p>Total Porks: {totalPorks}</p>
                  </div>
                </div>

                <div className="imgNFTBox">
                  <StakeNFTSlider    
                  address={address}
                  contract={contract}
                  signer={signer}
                  nftData={nftData}
                  />
                </div>
                <div>
                  <a onClick={claimAllHandler} className="all-claim-btn">{claiming ? "Claiming .." : "Claim All"}</a>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}
