import { useState,useEffect,useContext } from 'react'
import {doc, getFirestore,getDoc } from 'firebase/firestore'

import { useParams,NavLink  } from "react-router-dom";
import Loading from '../Loading';
import ItemCount from './products/ItemCount';
import { CartContext } from '../../CartContex';


const ItemDetailContainer = () => {
    const  [Carrito,addProduct] = useContext(CartContext);
    let params = useParams();
    const [prod, setProduct] = useState([]);
    const [bolean, setBoleans] = useState(true);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState();

const funcionContador = (contador) => {
    
    addProduct({item:prod,quantity:contador});
    setCantidad(contador);

    
}



            useEffect(() => {
            const db = getFirestore();
            const queryProducts = doc(db,'productos',params.id);
            getDoc(queryProducts).then(
                resp => {
                    setProduct({id:resp.id,...resp.data()});  
            }).catch((err) => { console.log(err) })
            .finally((resp) => {
                setLoading(false) 
            });
            }, [params.id]);


    return (
        <>
        { loading ? <Loading/> :  
            
            <div className="container">
                <div className="card col-lg-4">
                    <div className="card-body">    
                        <h5 className="card-title">{prod.nombre}</h5>
                        <img className="card-img-top" src={prod.img} alt={prod.nombre}/>
                        <p className="card-text">{prod.descripcion}</p>
                        <i className="btn btn-danger">$ {prod.precio}</i>
                        {cantidad===undefined ? <ItemCount stock={prod.stock} initial={1} onAdd={funcionContador}/> : <NavLink to="/cart"><p><button className="btn btn-succes">Terminar Compra</button></p></NavLink>}
                        
                        
                                 
                    </div>
                </div>       
            </div> 
            
            
        }



                   
        </>
        
    )
}
export default ItemDetailContainer