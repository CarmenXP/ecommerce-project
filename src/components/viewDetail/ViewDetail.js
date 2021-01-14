import React,{useState, useEffect} from 'react';




const ViewDetail = () =>{
    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch("https://database-e-commerce-default-rtdb.firebaseio.com/products.json")
        .then((res) => res.json())
        .then((json) => {
          setProduct(json.blouses);
        });
    }, []);

    return(
        <div >
            <h1>Detalle</h1>
            
        </div>
    )
}

export default ViewDetail