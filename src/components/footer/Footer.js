import React from 'react'
import styles from './footer.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';


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
                        /><button className={styles.go} type="submit"
                        >sent</button></span>
                    </form>
                </div>

            </div>
            <div className= {styles.SocialSites}>
                <a href="#"><FacebookIcon
                    style={{ color: "black", fontSize: 35}}
                /></a>
                <a href="#"><InstagramIcon
                    style={{ color: "black", fontSize: 35}}
                /></a>
                <a href="#"><YouTubeIcon
                    style={{ color: "black", fontSize: 35 }}
                /></a>
                <a href="#"><PinterestIcon
                    style={{ color: "black", fontSize: 35}}
                /></a>
                <a href="#"><TwitterIcon
                    style={{ color: "black", fontSize: 35 }}
                /></a>
                

            </div>
            <div className={styles.copyRight}>
                <span> &copy; Maracuyá. Todos los derechos reservados</span>



            </div>
            
        </footer>
     );
}
 
export default Footer;