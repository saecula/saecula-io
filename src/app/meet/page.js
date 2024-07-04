import Link from 'next/link';
import React from 'react';

export default () => {
  return (
    <div className="text-container">
      <div className="text-block">
        you found{' '}
        {<Link href="https://meet.google.com/axk-ubuj-rgx">my meet link</Link>}!
      </div>
    </div>
  );
};
