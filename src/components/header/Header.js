import React from 'react';
import{Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import styles from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import {signout} from '../../redux/actions/userActions';
import boho from '../../img/boho.png'



const Header = () => {

    const cart = useSelector((state)=> state.cart);
    const {cartItems}= cart;

    const cartCount = () =>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();
    const signOutHandler = () =>{
        dispatch(signout());
    }


    //const logo= "../img/logo-boho.png";
    return ( 
       
             <header>
                 <div className={styles.firstNav}> 
                         <div className={styles.logo}>
                            <Link to='/'><img src={boho} alt="iconBrand" /></Link>

                         </div>
                         <div className={styles.search}>
                             <form>
                                
                                    <input
                                        className={styles.searchBar}
                                        type="search"
                                        placeholder="Buscar"
                                     />
                                    <button type="submit" className={styles.searchSent}><SearchIcon
                                        style={{ color: "white", fontSize: 16 }}
                                    /></button>
                                

                             </form>
                         </div>
                         <div className={styles.menu}>  
                            {}  
                            <Link to="/signIn"><AccountCircleIcon
                                style={{color: "black", fontSize: 35 }}/>
                                
                            </Link>
                            <Link to="/myfavorites"><FavoriteIcon style={{fontSize:35}}/></Link>

                            <Link to="/cart"><ShoppingCartIcon
                                style={{ color: "black", fontSize: 35 }}
                            /><span className={styles.count}>{cartCount()}</span>
                            </Link>
                         </div>
                    </div>
                 <nav>
                    <NavLink  exact activeClassName="active"  to="/">Home </NavLink>
                    <NavLink activeClassName="active"  to="/clothes"> Clothes</NavLink>
                    

                </nav>
                 
                 
            
            </header>

        
       
     );
}
 
export default Header;