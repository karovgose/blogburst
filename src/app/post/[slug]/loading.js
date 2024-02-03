'use client';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {' '}
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#626262"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
