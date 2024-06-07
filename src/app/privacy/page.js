import React from 'react';

export default () => {
  return (
    <div className="container">
      <div className="item">
        {
          "I'm adding the ability to sign in to my site using Oauth (like Google and maybe Apple) solely for the fun of learning about auth."
        }
      </div>
      <div className="item">
        {
          "If you choose to log in thusly, I will ask for your email address in order to provide the server with some minimal object permanence about your visits here. I will store these emails in an encrypted form and never share them willingly. I won't look at or store other details in your remote profile."
        }
      </div>
      <div className="item">
        {
          "I might later provide ways for you to add information to your profile here. But protecting information is hard and I probably suck at it. So if you choose to enter such information, I hereby forbid you to include anything you'd be upset to find had a) vanished, b) been shared with your worst enemy, or c) surfaced alongside your name and photo on the front page of the New York Times."
        }
      </div>
      <div className="item">
        {
          "If you hate all of that, never fear, just play around on the site anonymously. Or if you've logged in before and regret it, you can delete your profile and I'll make sure it's gone."
        }
      </div>
    </div>
  );
};
