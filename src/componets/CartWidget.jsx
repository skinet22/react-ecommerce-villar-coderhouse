import { Link,useParams  } from "react-router-dom";
import React, {useContext} from 'react';
import {CartContext} from '../CartContex'   //Importamos el contexto de nuestro carrito


const CartWidget = (props) => {
    const [Products,setCart] = useContext(CartContext);
    let count = 0;
    Products ? Products.map(prod => { count += prod.quantity}) : count = 0;
    return (

        <div>
            <Link className="nav-link" to="/cart"><i className="bi bi-cart4"></i> Carrito {count}</Link>
        </div>
    )
}
export default CartWidget