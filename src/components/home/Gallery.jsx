import React from 'react';
import styles from './gallery.module.css';

export default function Gallery() {
    return (
      <div className={styles.galleryContent}>
        <div className={styles.galleryTitle}>
            <h1 > #Chica Boho</h1>
        </div>   
        <div className={styles.gallery}> 
          <div>
            <img
              src="https://i.pinimg.com/originals/f0/95/73/f0957376b14a4811dcc4ed78b9e2d5ca.jpg"
              alt="boho-girls"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/74/5e/82/745e82e962ec9572b3766805210917b8.jpg"
              alt="boho-girl"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/6b/42/4e/6b424ede01b82e16c3b3fbcacc4ff194.jpg"
              alt="boho-girl"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/3d/09/ab/3d09ab0f6b13ee6c7cedbab0440675ee.jpg"
              alt="boho-girl"
            />
          </div>
          <div>
            <img
              src="https://www.handfie.com/wp-content/uploads/2019/03/ESTILO-BOHO-CHIC-CUSTOMIZAR-BOLSO.jpg"
              alt="boho-girl"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/45/db/20/45db205c87a4bf6462041c633efff49e.jpg"
              alt="boho-girl"
            />
          </div>
          <div>
            <img
              src="https://cdn.wallapop.com/images/10420/9g/rw/__/c10420p572371040/i1752832925.jpg?pictureSize=W640"
              alt="boho-girl"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/5b/78/31/5b78319cd27a3974d6a66003ddb124f5.jpg"
              alt="boho-girl"
            />
          </div>
        </div>
      </div>
    );
  }