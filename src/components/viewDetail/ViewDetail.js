import React,{useState, useEffect} from 'react';


const ViewDetail = ({match}) =>{
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
            <h1>Detalle</h1>
            <span>{product.producto}</span> 
            <span>{product.precio}</span>
            <img src={product.imagen}/>
        </div>
    )
}

export default ViewDetail