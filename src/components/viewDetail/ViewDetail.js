import React,{useEffect, useState} from 'react';
import ViewDetailPage from './ViewDetailPage';

import CancelIcon from '@material-ui/icons/Cancel';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetails} from '../../redux/actions/productActions';
import {addToCard} from '../../redux/actions/cartActions';
import { Fragment } from 'react';

const ViewDetail = ({match, history}) =>{
  const dispatch = useDispatch();
  const[qty, setQty]= useState(1)


  const productDetail = useSelector((state)=> state.getProductDetail);
  const {loading, error, product} = productDetail;
  console.log(productDetail)
  console.log(match.params.id)

  useEffect(()=> {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
      console.log('se ejecuta el axios')
    }
  }, [dispatch, match, product]);

  const addToCardHandler = ()=>{
    dispatch(addToCard(product._id, qty));
    history.push(`/cart`);
  }

  return(
    <div >
      
        
        <CancelIcon 
          style={{color: "black", fontSize: 25}}
          onClick={()=>history.goBack()}
        />
      
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Fragment>


        <ViewDetailPage
          image ={product.image}
          price={product.price} 
          product={product.product} 
          id ={product._id}  
          description={product.description} 
          addToCardHandler={addToCardHandler} 
          qty={qty}
        />

                <p> Cantidad
                  <select value={qty} onChange={(e)=> setQty(e.target.value)}> 
                    {[...Array(product.countInStock).keys()].map((x) =>(
                    <option key ={x + 1} value ={x + 1}>
                        {x + 1}
                    </option>
                    ))}
                  </select>
              </p>
                    
                    
                   

             


       

        </Fragment>
        

       

      )

}
        
    </div>
) 




    {/*
      const [product, setProduct] = useState([]);
    //const{match:{params:{id}}}=props
    console.log(match)
    console.log(match.params.productid)
    const endPoint= match.params.productid - 1
    console.log(endPoint)

    useEffect(() => {
      fetch(`https://database-e-commerce-default-rtdb.firebaseio.com/products/blouses/${endPoint}.json` )
        .then((res) => res.json())
        .then((json) => {
          setProduct(json);
        });
    }, []);
  
    return(
        <div >
          
            
            <CancelIcon 
              style={{color: "black", fontSize: 25}}
              onClick={()=>history.goBack()}
            />
          
          <ViewDetailPage
            producto={product.producto}
            precio={product.precio}
            imagen={product.imagen}
            id={product.id}
            descripcion={product.descripcion}
          />
            
        </div>
    ) 
    
    */}
    
}

export default ViewDetail