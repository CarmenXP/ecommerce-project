import React from 'react';

import Carousel from './Carousel';
import Gallery from './Gallery';



export default function HomePage(){
const images=[
   {
      id: 1,
      title: "New  In",
      image:"https://peleymele.com/wp-content/uploads/2015/03/boho-chic-coachella.jpg"
   },
   {
      id: 2,
      title:"Ropa",
      image:"https://app.lamodaes.com/wp-content/uploads/2019/10/Atuendos-boho-chic-para-que-el-oto%C3%B1o-te-agarre-a-la-moda.jpg"
   },
   {
      id: 3,
      title:" Zapatos",
      image:"https://www.parahippies.com/wp-content/uploads/chicas-con-botas-hippies.jpg"
   }
]

   return(
      <div >
         <Carousel
            images={images}
         />
         <Gallery/>

      </div>
      

   )
        
        

   
}