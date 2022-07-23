
import React, {useContext} from 'react';
import {CartContext} from '../../CartContex'   //Importamos el contexto de nuestro carrito
import { NavLink  } from "react-router-dom";

const Cart = (props) => {
    const [Carrito,addProduct,removeProduct,updateProduct,emptyCart,getCart,totalCart,generateOrder] = useContext(CartContext);
    let CartSession = getCart();

    
    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    return (

        <div>
            
            <div className="row">
                <div className="card col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title">Carrito</h5>
                            <ul>
                                {CartSession.length > 0 ? CartSession.map(prod => 
                                <li key={prod.item.id}>
                                    {prod.item.nombre}
                                    
                                    -
                                    
                                    Cantidad : {prod.quantity}
                                    
                                    -

                                    <i className="bi bi-trash3-fill" onClick={()=>removeProduct(prod.item.id)}></i>
                                    </li>): <li>No hay productos en el carrito </li>}

                            </ul>
                            {CartSession.length > 0 ? <button className="btn btn-danger" onClick={()=>emptyCart()}>Vaciar Carrito</button> :
                            <NavLink className='btn btn-danger' to="/">Volver a la Tienda</NavLink> 
                            }      
                        </div>
                    </div> 
                    <div className="card col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title">Total</h5>
                            <p className="card-text">$ {totalCart()}</p>
                            <button className="btn btn-success" onClick={()=>generateOrder()}>Generar Orden</button>
                        </div>                
                    </div>      
            </div>

        </div>
    )
}
export default Cart