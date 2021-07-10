import React from 'react';

export default function Sprite(props) {
  const { y, x, h, w } = props.data;
  return <div
    style={{
      position: 'absolute',
      top: props.position.y,
      left: props.position.x,
      height: `${h}px`,
      width: `${w}px`,
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: `-${x}px -${y}px`
    }}
    />
}