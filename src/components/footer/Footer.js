import React from 'react'

const Footer = () => {
    return ( 
        <footer>
            <div className="footerContent">
                <div className="menuBar">
                    <h4>Necesitas Ayuda</h4>
                        <ul>
                            <a href="#"><li>Atención al cliente</li></a>
                            <a href="#"><li>Facturación</li></a>
                            <a href="#"><li>Tiendas</li></a>
                        </ul>

                </div>
                <div className="menuBars">
                    <h4>Acerca de Maracuyá</h4>
                    <ul>
                            <a href="#"><li>¿Quiénes somos?</li></a>
                            <a href="#"><li>Bolsa de trabajo</li></a>
                            <a href="#"><li>Relación con inversionistas</li></a>
                    </ul>
                </div >
                <div className="menuBar">
                    <h4>Métodos de pago</h4>
                    <ul>
                            <a href="#"><li>Visa</li></a>
                            <a href="#"><li>Mastercard</li></a>
                            <a href="#"><li>American Express</li></a>
                        </ul>
                </div>
                <div className="menuBar">
                    <h4>Suscríbete a nuestra <br/> Newsletter</h4>
                    <form>
                        <span><input 
                        type="email"
                        placeholder="email@email"
                        /><button type="submit">sent</button></span>
                    </form>
                </div>

            </div>
            <div className="SocialSites">
                <a href="#">Facebook</a>
                
                <a href="#">Instagram</a>
                
                <a href="#">YouTube</a>
                
                <a href="#">Pinterest</a>
                
                <a href="#">Twitter</a>
                
                <a href="#">TikTok</a>

            </div>
            <div className="copyRight">
                <span> &copy; Maracuyá. Todos los derechos reservados</span>

                

            </div>
            
        </footer>
     );
}
 
export default Footer;