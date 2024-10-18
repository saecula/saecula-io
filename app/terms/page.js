'use client';
import React from 'react';

import terms from './terms';

export default () => {
  return (
    <div className="tc">
      <div dangerouslySetInnerHTML={{ __html: terms }} />
    </div>
  );
};
