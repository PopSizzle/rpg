import React from 'react';
import Sprite from "../sprite";

export default function Actor(props) {
  
  const h = props.data.h;
  const w = props.data.w;

  let position = {
    x:0,
    y:0,
  }

  if(props.position) position = props.position;

  return (
    <Sprite
      image={props.image}
      data={{
        x: props.step * w,
        y: props.dir * h,
        w: w,
        h: h,
      }}
      position={position}
    />
  )
}