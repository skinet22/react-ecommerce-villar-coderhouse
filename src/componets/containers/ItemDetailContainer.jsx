import { useState,useEffect,useContext } from 'react'
import {doc, getFirestore,getDoc } from 'firebase/firestore'
import './ItemDetailContainer.css'
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
            <div className="col-lg-8 border p-3 main-section bg-white">
                <div className="row m-0">
                    <div className="col-lg-4 left-side-product-box pb-3">
                        <img className="border p-3" src={prod.img} alt={prod.nombre}/>
                        <span className="sub-img">
                            <img className="border p-2" src={prod.img} alt={prod.nombre}/>
                            <img className="border p-2" src={prod.img} alt={prod.nombre}/>
                        </span>
                    </div>
                    <div className="col-lg-8">
                        <div className="right-side-pro-detail border p-3 m-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <span>{prod.categorias}</span>
                                    <p className="m-0 p-0">{prod.nombre}</p>
                                </div>
                                <div className="col-lg-12">
                                    <p className="m-0 p-0 price-pro">${prod.precio}</p>
                                    <hr className="p-0 m-0"></hr>
                                </div>
                                <div className="col-lg-12 pt-2">
                                    <h5>Descripción</h5>
                                    <span>{prod.descripcion}</span>
                                    <hr className="m-0 pt-2 mt-2"></hr>
                                </div>
                                <div className="col-lg-12">
                                    <p className="tag-section"><strong>Tag : </strong><a href="">Woman</a><a href="">,Man</a></p>
                                </div>
                                <div className="col-lg-12">
                                    <h6>Cantidad :</h6>
                                    {cantidad===undefined ? <ItemCount stock={prod.stock} initial={1} onAdd={funcionContador}/> : <NavLink to="/cart"><p><button className="btn btn-danger">Terminar Compra</button></p></NavLink>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default ItemDetailContainer