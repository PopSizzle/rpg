import {useState} from 'react'

export default function useWalk(maxSteps){

  const [position, setPosition] = useState({x:0, y:0});
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const stepSize = 16;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  }

  function walk(dir){

    setDir(prev => {
      if(directions[dir] === prev) move(dir);
      return directions[dir];
    })

    let steps = step;

    if(steps < maxSteps -1) steps++;
    else steps = 0;

    setStep(steps);
  }

  function move(dir) {

    let loc = { x:0, y:0}

    if(position) loc = position;

    console.log(dir);

    loc.x += modifier[dir].x;
    loc.y += modifier[dir].y;

    setPosition(loc);
  }

  return {
    walk,
    dir,
    step,
    position,
  }
}