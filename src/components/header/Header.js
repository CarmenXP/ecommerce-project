import React from 'react';
import styles from './header.module.css';


const Header = () => {
    return ( 
       
             <header>
                 <div className={styles.logo}>
                    <a href='#'>Logo</a>
            
                 </div>
                 <div className={styles.search}>
                     <form>
                        <span>
                            <input
                                type="texto"
                                placeholder="Buscar"
                             />
                            <span><button type="submit">sent</button></span>
                        </span> 
                        
                     </form>
                 </div>
                 <div className={styles.menu}>
                    <a href='# '>Log in</a>
                    <a href="#">Carrito</a>
                 </div>
            
            </header>

        
       
     );
}
 
export default Header;