import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return ( 
        <footer>
            <div className={styles.footerContent}>
                <div className={styles.menuBar}>
                    <h4>Necesitas Ayuda</h4>
                        <ul>
                            <li><a href="#">Atención al cliente</a></li>
                            <li><a href="#">Facturación</a></li>
                            <li><a href="#">Tiendas</a></li>
                        </ul>

                </div>
                <div className= {styles.menuBar}>
                    <h4>Acerca de Maracuyá</h4>
                    <ul>
                            <li><a href="#">¿Quiénes somos?</a></li>
                            <li><a href="#">Bolsa de trabajo</a></li>
                            <li><a href="#">Relación con inversionistas</a></li>
                    </ul>
                </div >
                <div className={styles.menuBar}>
                    <h4>Métodos de pago</h4>
                    <ul>
                            <li><a href="#">Visa</a></li>
                            <li><a href="#">Mastercard</a></li>
                            <li><a href="#">American Express</a></li>
                        </ul>
                </div>
                <div className={styles.menuBar}>
                    <h4>Suscríbete a nuestra <br/> Newsletter</h4>
                    <form>
                        <span><input 
                        type="email"
                        placeholder="email@email"
                        /><button type="submit">sent</button></span>
                    </form>
                </div>

            </div>
            <div className= {styles.SocialSites}>
                <a href="#">Facebook</a>
                
                <a href="#">Instagram</a>
                
                <a href="#">YouTube</a>
                
                <a href="#">Pinterest</a>
                
                <a href="#">Twitter</a>
                
                <a href="#">TikTok</a>

            </div>
            <div className={styles.copyRight}>
                <span> &copy; Maracuyá. Todos los derechos reservados</span>



            </div>
            
        </footer>
     );
}
 
export default Footer;