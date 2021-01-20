import React from 'react';
import{Link} from 'react-router-dom';
import styles from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const Header = () => {

    const logo= "https://i.pinimg.com/474x/2c/2a/03/2c2a03dc02777014a1287b76f5dc1df2.jpg"
    return ( 
       
             <header>
                 
                 <div className={styles.logo}>
                    <a href='#'><img src={logo} /></a>
            
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
                    
                    <a href='# '><ShoppingCartIcon
                        style={{ color: "black", fontSize: 35 }}
                    /></a>
                 </div>
            
            </header>

        
       
     );
}
 
export default Header;