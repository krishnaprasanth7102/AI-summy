import React from 'react';
import zoro from './comonents/zoro';
import Demo from './comonents/Demo';


import './App.css';
import Zoro from './comonents/zoro';

const app = () => {
  return (
   <main>
    <div className="main">
        <div className= "gradient" />
    </div>

    <div className="app">
        <Zoro />
        <Demo />
    </div>
   </main>
  )
}

export default app
