
import React, {useContext} from 'react';
import {CartContext} from '../../CartContex'   //Importamos el contexto de nuestro carrito

const Cart = (props) => {
    const [Products,setCart] = useContext(CartContext);
    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    return (

        <div>
            <h1>Carrito</h1>
              
        </div>
    )
}
export default Cart