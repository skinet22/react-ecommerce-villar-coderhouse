import React, {useContext,useState} from 'react';
import {CartContext} from '../../CartContex'   
import { NavLink  } from "react-router-dom";
import Loading from '../Loading';
import {collection,getFirestore,addDoc} from 'firebase/firestore'
const Cart = (props) => {
    const [Carrito,addProduct,removeProduct,updateProduct,emptyCart,getCart,totalCart] = useContext(CartContext);
    const [orderAdd, setOrder] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ordererrAdd, setErr] = useState(false);
    const [validateForm, setErrform] = useState(true);
    const [orderId, setId] = useState('');
    const [NombreApellido, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [EmailConfirm, setEmailconfirm] = useState('');
    const [Telefono, setNTelefono] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [menssageErr, setMenssage] = useState('');
    const onHandonChangeValue = (e) => {
        //funcion para capturar el nombre y value de los campos del form, segun el campo se asigna un estado para luego generar la orden
        switch(e.target.name) {
            case 'nombre':
                setNombre(e.target.value);
            break;
            case 'email':
                setEmail(e.target.value);
            break;
            case 'emailConfirm':
                setEmailconfirm(e.target.value);
            break;
            case 'telefono':
                setNTelefono(e.target.value);
            break;
            case 'direccion':
                setDireccion(e.target.value);
            break;
          }
      }   
    let CartSession = getCart();
    const onSubmit = (event) => {
        event.preventDefault();
      };
    const generateOrder  = () => {
        //funcion para generar la orden
        
        let menssage = '';  
        if(NombreApellido==='' || Email==='' || EmailConfirm==='' || Telefono===''){ 
            setErrform(true);
            menssage = 'Todos los campos son obligatorios.';
            setMenssage(menssage);
        }else{
            console.log("Todo OK!!");
            setErrform(false);
            Email === EmailConfirm? setErrform(false): setErrform(true);
            console.log(validateForm);
            if(Email != EmailConfirm){ menssage = 'El correo electronico debe coincidir'; setMenssage(menssage);}
        }
        if(validateForm===false){
        setLoading(true)
        let Cart = getCart();
        let order = {
            buyer:{name:NombreApellido,email:Email,phone:Telefono,address:Direccion}, 
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
        setId(res.id);
        }).catch(err => {
        setErr(true);
        }).finally(() => {
        setLoading(false);
        emptyCart()
        });    
    }  
    }
    return (
        <div>
            <div className="row">
                <div className="card col-lg-6">
                    <div className="card-body">
                        <h5 className="card-title">Carrito</h5>
                        {loading && <Loading/>}
                        {orderAdd&&<div className="alert alert-success">Orden Generada, Su ID de pedido es: {orderId}</div>}
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
                    {CartSession.length > 0 && 
                    <div className="card col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title">Total</h5>
                            <p className="card-text">$ {totalCart()}</p>
                            {menssageErr!=''? <div className="alert alert-danger">{menssageErr}</div>: null}
                            <form name="Comprar" onSubmit={onSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputName">Nombre y Apellido *</label>
                                        <input type="text" className="form-control" name="nombre" id="inputName" placeholder="Nombre y Apellido" value={NombreApellido} onChange={onHandonChangeValue} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email *</label>
                                        <input type="email" className="form-control" name="email" id="inputEmail4" placeholder="Email" value={Email} onChange={onHandonChangeValue} required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmailconfim">Confirmar Email *</label>
                                        <input type="email" className="form-control" name="emailConfirm" id="inputEmailconfim" placeholder="Confirmar Email" value={EmailConfirm} onChange={onHandonChangeValue} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputTel">Teléfono *</label>
                                        <input type="phone" className="form-control" name="telefono" id="inputTel" placeholder="Teléfono" value={Telefono} onChange={onHandonChangeValue} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                    <button className="btn btn-success" onClick={()=>generateOrder()}>Generar Orden</button>
                                    </div>
                                </div>
                            </form>                             
                        </div>
                    </div> 
                    }       
            </div>
        </div>
    )
}
export default Cart