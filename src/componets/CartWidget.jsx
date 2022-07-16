import { Link,useParams  } from "react-router-dom";
import React, {useContext} from 'react';
import {CartContext} from '../CartContex'   //Importamos el contexto de nuestro carrito


const CartWidget = (props) => {
    const [Products,setCart] = useContext(CartContext);
    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    return (

        <div>
            <Link className="nav-link" to="/cart"><i className="bi bi-cart4"></i> Carrito {Products.length}</Link>
        </div>
    )
}
export default CartWidget