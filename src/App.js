import React from "react";
import Player from './components/player';
import './App.css';
import m1 from './assets/m1.png';
import m2 from './assets/m2.png';

export default function App() {
  
  const data = {
    h: 32,
    w: 32,
  };
  
  return (
    <div className="zone-container">
      <Player image={m2} data={data}/>
    </div>
  );
}

