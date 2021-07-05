import React from 'react';
import m1 from '../../assets/m1.png';

export default function Sprite() {
  return <div
    style={{
      display: "inline-block",
      height: "32px",
      width: "32px",
      backgroundImage: m1,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0px 0px"
    }}
    />
}