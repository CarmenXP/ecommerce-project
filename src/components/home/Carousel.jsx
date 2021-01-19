import React from 'react';
import Slider from 'infinite-react-carousel';


export default function Carousel({images}){

    return(
        <section>
            <Slider>
                {images.map((image) =>(
                    <div key={image.id}>
                        <img
                            src={image.image} 
                            alt={image.title}
                        />
                        <p>{image.title}</p>

                    </div>

                ))}
            </Slider>
        </section>
    )
}