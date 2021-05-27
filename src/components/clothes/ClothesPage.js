import React, {useEffect} from 'react';
import CardClothes from './CardClothes';
import styles from './clothes.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts as listProducts} from '../../redux/actions/productActions';

export default function ClothesPage(){

  const dispatch = useDispatch();
  const getProducts = useSelector((state)=> state.getProducts);
  const {products, loading, error} = getProducts;


  useEffect(()=>{
    dispatch(listProducts());
  }, [dispatch]);

  return(
    <div>
      
      <div className={styles.content}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <CardClothes
              id={product._id}
              key={product._id}
              product={product.product}
              price={product.price}
              image={product.image }
            />
          )
        )
        
        
       )}  
      </div>
    </div>
) 

  
}