import {useState} from 'react'

export default function useWalk(maxSteps){

  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  function walk(dir){

    if(directions[dir] >= 0) setDir(directions[dir]);

    let steps = step;

    if(steps < maxSteps -1) steps++;
    else steps = 0;

    setStep(steps);
  }

  return {
    walk,
    dir,
    step,
    directions,
  }
}