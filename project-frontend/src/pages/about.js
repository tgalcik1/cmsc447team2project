
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div
      style={{
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      {/* <p style="color: #ffffff"> </p> */}
      <h1>About page</h1>
      <h3>In production.....</h3>


      
<h1>Our Team</h1>
<div class="row">
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Tristan Galcik</h2>
        <p class="title">Sprint Leader/Frontend Developer</p>
        <p>its ya boy skinny penis</p>
        <p>fakeemail@fake.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Caleb Luke</h2>
        <p class="title">Frontend Developer</p>
        <p>I'm the typa guy to fuck the janitor in exchange for mop water</p>
        <p>fakeemail@fake.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Roberto Villanueva</h2>
        <p class="title">Backend Developer</p>
        <p>W Rizz</p>
        <p>fakeemail@fake.com</p>
      </div>
    </div>
  </div>
</div>

<div class="row">
<div class="column">
    <div class="card">
      <div class="container">
        <h2>Opeyemi Kusemiju</h2>
        <p class="title">Backend Developer</p>
        <p>A successful man is one who earns more than his wife can spend. A successful woman is one who knows where to look for such a man.</p>
        <p>fakeemail@fake.com</p>
      </div>
    </div>
  </div>

<div class="column">
    <div class="card">
      <div class="container">
        <h2>Obinna Ezejiofor</h2>
        <p class="title">Frontend Developer</p>
        <p>Can cars stop at a bus stop?</p>
        <p>fakeemail@fake.com</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};
  
export default About;