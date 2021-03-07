import React,{useEffect} from 'react';
import ViewDetailPage from './ViewDetailPage';

import CancelIcon from '@material-ui/icons/Cancel';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetails} from '../../redux/actions/productActions';
import {addToCard} from '../../redux/actions/cartActions';

const ViewDetail = ({match, history}) =>{
  const dispatch = useDispatch();

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
    dispatch(addToCard(product._id, product.qty));
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
        <ViewDetailPage
            producto={product.product}
            precio={product.price}
            imagen={product.image}
            id={product._id}
            descripcion={product.description}
            disponible ={product.countInStock}
            agregar = {addToCardHandler}
            qty = {product.qty}
        />

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