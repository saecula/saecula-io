import Link from 'next/link';
import React from 'react';

const MyMeetLink = () => (
  <Link href="https://meet.google.com/axk-ubuj-rgx">my meet link</Link>
);

export default () => {
  return (
    <div className="text">
      <div className="item">
        you found <MyMeetLink />, you scoundrel you. If this ever gets abused,
        oh well, RIP this page.
      </div>
    </div>
  );
};
