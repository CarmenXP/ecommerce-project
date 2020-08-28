import React from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ClothesPage from './components/clothes/ClothesPage';
import MakeupPage from './components/makeup/MakeupPage';
import JewelryPage from './components/jewelry/JewelryPage';
import ForumPage from './components/forum/ForumPage';




export default function Routes(){

    return(

    <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route path="/clothes" component={ClothesPage}/>
        <Route path="/makeup" component={MakeupPage}/>
        <Route path="/jewelry" component={JewelryPage}/>
        <Route path="/forum" component={ForumPage}/>
    </Switch>

    )

      
    }
    
