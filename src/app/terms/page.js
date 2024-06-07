import React from 'react';

import terms from './terms';

export default () => {
  return (
    <div className="text">
      <div dangerouslySetInnerHTML={{ __html: terms }} />
    </div>
  );
};
