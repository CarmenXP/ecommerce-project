import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import CardClothes from './CardClothes';
import styles from './clothes.module.css';


export default function ClothesPage(){

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://database-e-commerce-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.blouses);
      });
  }, []);

    return(
        <div>
          <h1>Blusas</h1>
          <div className={styles.content}>
            {products.map((product) => (
                <CardClothes
                  id={product.id}
                  producto={product.producto}
                  precio={product.precio}
                  descripcion={product.descripcion}
                  imagen={product.imagen}
                />
            ))}  
          </div>
        </div>
    )
    
}