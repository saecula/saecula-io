import React from 'react';

export default () => {
  return (
    <div className="text-container">
      <div className="text-block">
        {
          "I'll be adding Oauth to this site solely for the fun of learning about auth. It also might make site security easier the line."
        }
      </div>
      <div className="text-block">
        {
          "If you choose to log in, the site will encrypt and store your email address to identify you, and store your name as a profile label. It won't store anything else."
        }
      </div>
      <div className="text-block">
        {
          "To give these profiles a real reason to exist, I may  end up letting you save information in it. Protecting information is hard. So if you save anything here, do not include anything you'd be upset to find either gone forever or on the New York Times front page next to a photo of your face."
        }
      </div>
      <div className="text-block">
        {
          'You will also be free to delete your profile and all of its information at any time.'
        }
      </div>
    </div>
  );
};
