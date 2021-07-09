import React from 'react';
import Actor from '../actor';
import useKeyPress from '../../hooks/useKeyPress';

export default function Player(props) {

  useKeyPress((e) =>{
    const dir = e.key.replace('Arrow', '').toLowerCase()
    console.log(dir);

  })

  return <Actor image={props.image}
  data={props.data}
  />

}
