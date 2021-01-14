import React, {useState, useEffect} from 'react';
import CardShoes from './CardShoes';
import styles from './shoes.module.css';

export default function ShoesPage(){
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
      fetch("https://database-e-commerce-default-rtdb.firebaseio.com/products.json")
        .then((res) => res.json())
        .then((json) => {
          setShoes(json.shoes);
        });
    }, []);
  
      return(
          <div>
            <h1>Zapatos</h1>
            <div className={styles.content}>
              {shoes.map((product) => (
                  <CardShoes
                    id={product.id}
                    zapato={product.zapato}
                    precio={product.precio}
                    descripcion={product.descripcion}
                    imagen={product.imagen}
                  />
              ))}  
            </div>
          </div>
      )
    
}