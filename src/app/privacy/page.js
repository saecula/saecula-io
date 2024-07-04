import React from 'react';

export default () => {
  return (
    <div className="text-container">
      <div className="text-block">
        {
          "I'm adding Oauth to this site solely for the fun of learning about auth. (It also makes it a teeny bit easier to guard against bots.)"
        }
      </div>
      <div className="text-block">
        {
          "If you choose to use it, a user profile will be created, which means the site will store your encrypted email address to provide the server with some minimal object permanence about you, as well as your first name so as to render your account in a way that doesn't look too weird. The site won't store anything else from your remote profile."
        }
      </div>
      <div className="text-block">
        {
          "To give your profile here a real excuse to exist, I'll probably end up making it something you can use to store other information too. But protecting information is hard and I probably suck at it. So if you choose to enter such information, I forbid you to include anything you'd be upset to find had either vanished OR surfaced alongside your photo on the front page of the New York Times."
        }
      </div>
      <div className="text-block">
        {
          "I have to explain my privacy policy, but you don't have to log in to use the site. You will also be free to delete your profile at any time."
        }
      </div>
    </div>
  );
};
