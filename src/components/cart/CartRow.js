import React from 'react'
import styles from './cart.module.css'

const img= 'https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000199159_sa.jpg'

export default({})=>{
    return(
        <div className={styles.cartRow}>
            <div>
                <img src={img} alt="audífonos"/>
            </div>
            <div>
                <span>
                    Products
                </span>
                <span>
                    Product description
                </span>
                <div>
                    <button> 
                        -
                    </button>
                    <input/>
                    <button> 
                        +
                    </button>
                 </div>
            </div>
            <div>
                <span>
                    x
                </span>
                <span>
                    $150.00
                </span>
            </div>
            
        </div>
    )

}