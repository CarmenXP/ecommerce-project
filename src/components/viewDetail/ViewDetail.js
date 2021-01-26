import React,{useState, useEffect} from 'react';
import ViewDetailPage from './ViewDetailPage';
import styles from './viewDetail.module.css';
import CancelIcon from '@material-ui/icons/Cancel';


const ViewDetail = ({match, history}) =>{
    const [product, setProduct] = useState([]);
    {/*const{match:{params:{id}}}=props*/}
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
}

export default ViewDetail