import React, {useEffect} from 'react';
//import { Link } from 'react-router-dom';
import CardClothes from './CardClothes';
import styles from './clothes.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts as listProducts} from '../../redux/actions/productActions';

export default function ClothesPage(){

  const dispatch = useDispatch();
  const getProducts = useSelector((state)=> state.getProducts);
  const {products, loading, error} = getProducts;
  console.log(getProducts)

  useEffect(()=>{
    dispatch(listProducts());
  }, [dispatch]);

  return(
    <div>
      <h1>Blusas</h1>
      <div className={styles.content}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <CardClothes
              id={product._id}
              producto={product.product}
              precio={product.price}
              descripcion={product.description}
              imagen={product.image }
            />
          )
        )
        
        
       )}  
      </div>
    </div>
) 


  {/*const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://database-e-commerce-default-rtdb.firebaseio.com/products/blouses.json")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
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
  */}  
}