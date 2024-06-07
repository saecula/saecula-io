import React from 'react';
import Image from 'next/image';

import { intro } from './svg';

const text =
  "Welcome! this is my personal site and it's under construction. for now you can find me at github.com/saecula or say hello at hi@saecula.io.";

export default () => {
  return (
    <div className="intro">
      <Image src={intro} alt={text} width={300} height={400} />
    </div>
  );
};
