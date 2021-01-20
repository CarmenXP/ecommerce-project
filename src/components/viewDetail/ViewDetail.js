import React,{useState, useEffect} from 'react';


const ViewDetail = (props) =>{
    const [product, setProduct] = useState([]);
    {/*const{match:{params:{id}}}=props*/}
  {/*
    useEffect(() => {
      fetch(`https://database-e-commerce-default-rtdb.firebaseio.com/products/blouses/${0}/${id}.json`)
        .then((res) => res.json())
        .then((json) => {
          setProduct(json);
        });
    }, [id]);
  */}
    return(
        <div >
            <h1>Detalle</h1>
           {/* <span>{product.producto}</span> 
              <span>{product.precio}</span>
            */}
        </div>
    )
}

export default ViewDetail