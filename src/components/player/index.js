import React from 'react';
import Actor from '../actor';
import useKeyPress from '../../hooks/useKeyPress';
import useWalk from '../../hooks/useWalk';

export default function Player(props) {

  const { dir, step, walk } = useWalk(3);

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  }

  useKeyPress((e) =>{
    e.preventDefault();

    const dir = e.key.replace('Arrow', '').toLowerCase()

    walk(dir);
  })

  return <Actor image={props.image}
  data={props.data} step={step} dir={dir}
  />

}
