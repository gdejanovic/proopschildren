import logo from './logo.svg';
import './App.css';
import Component from 'react';
import React from 'react';
import Korisnici from './components/Korisnici';
import Skola from './components/Skola';
import Children from './components/Children';
export default class App extends React.Component
{

  render(){
    return( 

      <>
      <Korisnici ime=' Davor' godine=' 28' ime2=" Jozo" godine2=' 31' ime3=" Marija" godine3=" 25"/>
      <Skola naziv="Prvomajska" adresa=" Avenija Marina Držića"/>
      <Children children="Rade Končar" />
      </>
   )
  }
}

// Malo sam dodao :)
// Usput naučio i fragmente