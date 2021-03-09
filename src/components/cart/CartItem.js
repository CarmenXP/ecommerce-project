import react from 'react-redux'

export default function CartItem({item, qtyChangeHandler, removeFromCartHandler}) {
 const {image, product, price, article, qty} = item 
    return(
        <div>
            <img src ={image}/>
            <div>
                <p>{article}</p>
            </div>
            <div>
                <p>cantidad</p>
            </div>
            <div>
                <p>Precio ${price} MXN</p>
            </div>
            <div>
                <p>Total</p>
            </div>


        </div>
    )
}