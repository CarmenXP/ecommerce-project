import React from 'react';
import './App.css';
import Routes from './Routes';
import {NavLink} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav>
        <NavLink  exact activeClassName="active"  to="/">Home </NavLink>
        <NavLink activeClassName="active"  to="/clothes"> Ropa de mujer</NavLink>
        <NavLink activeClassName="active"  to="/makeup">Maquillaje </NavLink>
        <NavLink activeClassName="active"  to="/jewelry"> Accesorios</NavLink>
        <NavLink activeClassName="active"  to="/forum"> Foro</NavLink>
      </nav>
      <Routes/>
    </div>
  );
}

