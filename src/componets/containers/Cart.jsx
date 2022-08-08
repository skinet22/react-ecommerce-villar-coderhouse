
import React, {useContext,useState} from 'react';
import {CartContext} from '../../CartContex'   //Importamos el contexto de nuestro carrito
import { NavLink  } from "react-router-dom";
import Loading from '../Loading';
import {collection,getFirestore,addDoc} from 'firebase/firestore'

const Cart = (props) => {
    const [Carrito,addProduct,removeProduct,updateProduct,emptyCart,getCart,totalCart] = useContext(CartContext);
    const [orderAdd, setOrder] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ordererrAdd, setErr] = useState(false);

    

    let CartSession = getCart();

    const generateOrder  = () => {
        setLoading(true)
        let Cart = getCart();
        console.log(Cart);
        let order = {
            buyer:{name:'Carlos Villar',email:'info@skndesarrollos.com.ar',phone:'1132479078'}, 
            items: Cart.map(prod => {
                return {
                    id: prod.item.id,
                    price: prod.item.precio,
                    title: prod.item.nombre
                }
            }),
            total: totalCart(),
        }
        
            
          const db = getFirestore();
          const orders = collection(db,"orders")
          addDoc(orders,order).then(res => {
            setOrder(true);
          }).catch(err => {
            setErr(true);
            console.log("Ocurrio un error ",err)
          }).finally(() => {
            setLoading(false);
            emptyCart()
          });
          
          
          


        
    }



    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    return (

        <div>
            
            <div className="row">
                <div className="card col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title">Carrito</h5>
                            {loading && <Loading/>}
                            {orderAdd&&<div className="alert alert-success">Orden Generada</div>}
                            {ordererrAdd&&<div className="alert alert-warnign">Ocurrio un problema y no pudimos generar su orden</div>}
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
                    {CartSession.length > 0 && <div className="card col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title">Total</h5>
                            <p className="card-text">$ {totalCart()}</p>
                             <button className="btn btn-success" onClick={()=>generateOrder()}>Generar Orden</button>
                        </div>
                    </div> 
                    }       
            </div>

        </div>
    )
}
export default Cart