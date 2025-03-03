'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ClientSideComponent = dynamic(() => import('./terms'), { ssr: false });

export default () => (
  <div className="tc">
    <div className="tb">
      <ClientSideComponent />
    </div>
  </div>
);
