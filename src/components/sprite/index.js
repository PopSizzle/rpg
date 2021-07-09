import React from 'react';

export default function Sprite(props) {
  const { y, x, h, w } = props.data;
  return <div
    style={{
      display: "inline-block",
      height: `${h}px`,
      width: `${w}px`,
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: `-${x}px -${y}px`
    }}
    />
}