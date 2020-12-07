import React from 'react';
import styles from './clothes.module.css';

export default function ClothesPage(){
    
    return(
        <div>
        <h1>Ropa</h1>
        <div className={styles.content}>

            <div className={styles.card}>
              <img className={styles.medium} src="https://i.pinimg.com/564x/3f/1f/3d/3f1f3dae3529d14e99124363215227bb.jpg" alt="product" />

              <div className={styles.cardBody}>
                  <h3>Blusa Maracuyá </h3>
                  <div className={styles.price}>Precio: $120</div>
                  <a href="">Ver</a>
              </div>
            </div>

            <div className={styles.card}>


                    <img className={styles.medium} src="https://i.pinimg.com/564x/1c/f4/00/1cf400988d7a5c57279d9926e81c86b1.jpg" alt="product" />

                  <div className={styles.cardBody}>

                      <h2>Blusa Maracuyá </h2>


                    <div className={styles.price}>$120</div>
                  </div>
                </div>

            <div className={styles.card}>


                    <img className={styles.medium} src="https://i.pinimg.com/564x/a6/d1/55/a6d1553c9d5a39546b3bffebc0d8c9a1.jpg" alt="product" />

                  <div className={styles.cardBody}>

                      <h2>Blusa Maracuyá </h2>


                    <div className={styles.price}>$120</div>
                  </div>
                </div>        

            <div className={styles.card}>
              <img className={styles.medium} src="https://i.pinimg.com/564x/59/33/aa/5933aa203d5f0c6ebe1f55d26249ea85.jpg " alt="product" />

              <div className={styles.cardBody}>
                  <h2>Blusa Maracuyá </h2>
                  <div className={styles.price}>$120</div>
              </div>
            </div>

        </div>


    </div>


    )
    
}