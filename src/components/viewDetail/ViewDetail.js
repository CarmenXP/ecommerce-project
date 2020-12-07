import React from 'react';
import styles from './viewDetail.module.css'

const ViewDetail = () =>{
    return(
        <div className={styles.viewContent}>
            <h2>Blusa Maracuyá</h2>
            <div>
                <img className ={styles.imageProduct} src="https://i.pinimg.com/564x/3f/1f/3d/3f1f3dae3529d14e99124363215227bb.jpg" alt="product"/>
            </div>
            <div className={styles.detail}>

            </div>
            
        </div>
    )
}

export default ViewDetail