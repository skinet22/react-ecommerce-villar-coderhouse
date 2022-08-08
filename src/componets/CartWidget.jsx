import { Link,useParams  } from "react-router-dom";
import React, {useContext,useState} from 'react';
import {CartContext} from '../CartContex'   //Importamos el contexto de nuestro carrito


const CartWidget = (props) => {
    const [Carrito,addProduct, removeProduct, updateProduct, emptyCart,getCart] = useContext(CartContext);
    //const [cartSession,setCart] = useState([]);
    let Cart = getCart();
    //setCart(Cart);
    console.log(Cart);
    let count = 0;
    Cart ? Cart.map(prod => { count += prod.quantity}) : count = 0;
    return (

        <div>
            <Link className="nav-link" to="/cart"><i className="bi bi-cart4"></i> Carrito {count}</Link>
        </div>
    )
}
export default CartWidget