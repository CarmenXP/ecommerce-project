import React from 'react';
import{Link, NavLink} from 'react-router-dom';
import styles from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const Header = () => {

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
                                    <button type="submit">B</button>
                                </span> 

                             </form>
                         </div>
                         <div className={styles.menu}>    
                            <Link to="/signIn"><AccountCircleIcon
                                style={{color: "black", fontSize: 35 }}

                            /></Link>

                            <Link to="/cart"><ShoppingCartIcon
                                style={{ color: "black", fontSize: 35 }}
                            /></Link>
                         </div>
                    </div>
                 <nav>
                    <NavLink  exact activeClassName="active"  to="/">Home </NavLink>
                    <NavLink activeClassName="active"  to="/clothes"> Ropa de mujer</NavLink>
                    

                </nav>
                 
                 
            
            </header>

        
       
     );
}
 
export default Header;