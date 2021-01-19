import React from 'react';
import Slider from 'infinite-react-carousel';
import styles from './carousel.module.css';


export default function Carousel({images}){

    return(
        <section className={styles.contentSlider}>
            <Slider className={styles.slider}>
                {images.map((image) =>(
                    <div key={image.id} className={styles.imageSlider}>
                        <img
                            src={image.image} 
                            alt={image.title}
                        />
                        <p className={styles.sliderTitle}>{image.title}</p>

                    </div>

                ))}
            </Slider>
        </section>
    )
}