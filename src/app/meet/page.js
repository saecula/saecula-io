import React from 'react';

const MyMeetLink = () => (
  <a href="https://meet.google.com/axk-ubuj-rgx">my meet link</a>
);

export default () => {
  return (
    <div className="container">
      <div className="item">
        you found <MyMeetLink />, you scoundrel you. If this ever gets abused,
        oh well, RIP this page.
      </div>
    </div>
  );
};
