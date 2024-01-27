import React from 'react';
import Content from '../components/Content';
import Navbar from '../components/Navbar';

function Home() {
  const page='home'
  return (
    <div>
        <Navbar page={page}/>
        <Content/>
    </div>
  );
}

export default Home