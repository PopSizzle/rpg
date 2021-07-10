import React from 'react';
import Actor from '../actor';
import useKeyPress from '../../hooks/useKeyPress';
import useWalk from '../../hooks/useWalk';

export default function Player(props) {

  const { dir, step, walk, position } = useWalk(3);

  useKeyPress((e) =>{
    e.preventDefault();

    walk(e.key.replace('Arrow', '').toLowerCase());
  })

  return <Actor image={props.image}
  data={props.data} step={step} dir={dir} position={position}
  />

}
