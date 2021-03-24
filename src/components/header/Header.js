import React from 'react';
import{Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import styles from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import {signout} from '../../redux/actions/userActions';


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


    const logo= "https://i.pinimg.com/474x/2c/2a/03/2c2a03dc02777014a1287b76f5dc1df2.jpg"
    return ( 
       
             <header>
                 <div className={styles.firstNav}> 
                         <div className={styles.logo}>
                            <a href='#'><img src={logo} /></a>

                         </div>
                         <div className={styles.name}>
                             <h2> titulo del e-commerce</h2>
                         </div>
                         <div className={styles.search}>
                             <form>
                                <span>
                                    <input
                                        type="texto"
                                        placeholder="Buscar"
                                     />
                                    <button type="submit"><SearchIcon
                                        style={{ color: "black", fontSize: 15 }}
                                    /></button>
                                </span> 

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
                            /><span>{cartCount()}</span>
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