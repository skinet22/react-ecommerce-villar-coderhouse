
import React, {useContext} from 'react';
import {CartContext} from '../../CartContex'   //Importamos el contexto de nuestro carrito
import ItemCount from './products/ItemCount';

const Cart = (props) => {
    const [Carrito,addProduct,removeProduct,updateProduct,emptyCart] = useContext(CartContext);
    const funcionContador = (id,contador) => {
    
        updateProduct(id,contador)
    
        
    } 
    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    return (

        <div>
            
            <div className="container">
                <div className="card col-lg-6">
                    <div className="card-body">
                        <h5 className="card-title">Carrito</h5>
                        <ul>
                            {Carrito.map(prod => 
                            <li key={prod.item.id}>
                                {prod.item.nombre}
                                -
                                
                                <ItemCount stock={prod.item.stock} initial={prod.quantity} onAdd={funcionContador}/>
                                <i className="bi bi-trash3-fill" onClick={()=>removeProduct(prod.item.id)}></i>
                                </li>)}

                        </ul>

                        <button className="btn btn-danger"onClick={()=>emptyCart()}>Vaciar Carrito</button>
                        
                                 
                    </div>
                </div>       
            </div>
        </div>
    )
}
export default Cart