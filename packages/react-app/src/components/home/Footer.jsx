import React from "react";

export default function Footer() {

  return (
    <div className="footerContainer">
      <div className="footer-text">
        <p>© 2023 TURBO PIGS</p>
      </div>
      <div className="footer-contact">
        
        <a href="" target="_blank">
          <span className="foot-twitter">
              <img src='./assets/image/discord.png' width='20px' height='20px' />
          </span>
        </a>
        <a href="https://twitter.com/">
          <span className="foot-discord">
            <img src='./assets/image/twitter.png' width='20px' height='20px' />
          </span>
        </a>
        <a href="mailto:elvismart2020@gmail.com">
          <span className="foot-mailbox">
            <img src='./assets/image/mail.png' width='20px' height='20px' />
          </span>
        </a>
      </div>
    </div>
  );
}
