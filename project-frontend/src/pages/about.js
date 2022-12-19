
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
        <p>No dick, no balls, and probably no butthole since this guy feeds on radiation</p>
        <p>fakeemail@fake.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Caleb Luke</h2>
        <p class="title">Frontend Developer</p>
        <p>Ratio + Young boy better.</p>
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
        <p>Candice balls fit in yo mouf?</p>
        <p>fakeemail@fake.com</p>
      </div>
    </div>
  </div>

<div class="column">
    <div class="card">
      <div class="container">
        <h2>Obinna Ezejiofor</h2>
        <p class="title">Frontend Developer</p>
        <p>W manz</p>
        <p>fakeemail@fake.com</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};
  
export default About;