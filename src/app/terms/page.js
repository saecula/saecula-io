import React from 'react';

import terms from './terms';

export default () => {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: terms }} />
    </div>
  );
};
