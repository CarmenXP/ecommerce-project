import React from 'react';
import{Link} from 'react-router-dom';
import styles from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const Header = () => {

    const logo= "https://lh3.googleusercontent.com/proxy/MJQOFFlDq3XkZ0O193TSsQHAzJom08Oh4oUoH-hI0fObgN43bW21VLu4Pk__qoHutvuTrEn0e0pj8nJYPjDfT1XA0zv-xEOP7ajecezHGMbwEvEuxYeOAE2_1d0z_7fW6A"
    return ( 
       
             <header>
                 <div className={styles.logo}>
                <a href='#'><img /></a>
            
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
                        style={{ fontSize: 35 }}
                    
                    /></Link>
                    
                    <a href='# '><ShoppingCartIcon
                        style={{ fontSize: 35 }}
                    /></a>
                 </div>
            
            </header>

        
       
     );
}
 
export default Header;