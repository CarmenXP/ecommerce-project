import React from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ClothesPage from './components/clothes/ClothesPage';
import ShoesPage from './components/shoes/ShoesPage';
import ViewDetail from './components/viewDetail/ViewDetail';
import SignIn from './components/signIn/SignIn';




export default function Routes(){

    return(

    <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route path="/clothes" component={ClothesPage}/>
        <Route path="/shoes" component={ShoesPage}/>
        <Route path="/viewDetail" component={ViewDetail}/>
        <Route path="/signIn" component={SignIn}/>
       
    </Switch>

    )

      
    }
    
