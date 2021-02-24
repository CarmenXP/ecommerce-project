import React, {useState} from 'react';
import './App.css';
import Routes from './Routes';
import {NavLink} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {

  let [state, setState] = useState({
    show: false
  })
  
  function toggleShow(){
    setState({...state, show: !state.show})
  }
  return (
    <Provider store = {store}>
    <div>
      <div className= "headband"></div> 
      <Header/>
      
    {/*}  <nav>
        <NavLink  exact activeClassName="active"  to="/">Home </NavLink>
        <NavLink activeClassName="active"  to="/clothes"> Ropa de mujer</NavLink>
        <NavLink activeClassName="active"  to="/shoes"> Zapatos </NavLink>

  </nav>    */}
      <Routes/>

      {/*
      <Cart
        onCancel ={toggleShow}
        show={state.show}
      />
      
      */ }
      

      <Footer/>
    </div>
    </Provider>
  );
}

