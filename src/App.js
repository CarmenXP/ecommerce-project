import React from 'react';
import './App.css';
import Routes from './Routes';
import {NavLink} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div>
      <Header/>
      <nav className="navbar"> 
        <NavLink  exact activeClassName="active"  to="/">Home </NavLink>
        <NavLink activeClassName="active"  to="/clothes"> Ropa de mujer</NavLink>
        <NavLink activeClassName="active"  to="/shoes"> Zapatos </NavLink>
        
      </nav>
      <Routes/>
      <Footer/>
    </div>
  );
}

