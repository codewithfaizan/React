import UseState from './components/UseState';
import Header from './components/Header.js';
import Section from './components/Section.js';
import Nav from './components/Nav.js';
import {  UseEffectExample } from './components/UseEffectExample.js';

import './App.css';
import InputFrom from './components/InputFrom';

function App() {
  // create a variable counter

  // function that incrementaa counter
  return (
    <>
      {/* <h1>Hello, Welcome to Hooks</h1> */}
    <Header/>
    <Section/>
    <Nav/>
    <InputFrom/>
      <UseState/>

      <UseEffectExample/>
    </>
  );
}

export default App;
