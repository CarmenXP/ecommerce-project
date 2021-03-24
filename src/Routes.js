import React from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ClothesPage from './components/clothes/ClothesPage';
import ViewDetail from './components/viewDetail/ViewDetail';
import SignIn from './components/signIn/SignIn';
import Cart from './components/cart/Cart';
import Register from './components/register/Register';
import Favorites from './components/favorites/Favorites';





export default function Routes(){

    return(

    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/clothes" component={ClothesPage}/>
        <Route exact path="/products/:id" component={ViewDetail}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/signUp" component={Register}/>
        <Route path = "/cart" component={Cart}/>
        <Route path = "/myfavorites" component={Favorites}/>
       
    </Switch>

    )

      
    }
    
