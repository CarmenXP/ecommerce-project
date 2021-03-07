import React, {useState} from 'react';
import './App.css';
import Routes from './Routes';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {

 
  
  
  return (
    <Provider store = {store}>
    <div>
      <div className= "headband"></div> 
      <Header/>
      
      <Routes/>

     
      

      <Footer/>
    </div>
    </Provider>
  );
}

