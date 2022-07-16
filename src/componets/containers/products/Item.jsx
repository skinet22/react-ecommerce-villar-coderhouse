
import { Link,useParams  } from "react-router-dom";

const Item = (props) => {
    return (

        <div key={props.producto.id} id={props.producto.id} className="card col-lg-3" >
        <img className="card-img-top" src={props.producto.img} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.producto.nombre}</h5>
            <p className="card-text">{props.producto.descripcion}</p>
            <i className="btn btn-danger">$ {props.producto.precio}</i>
            <br></br>
            <Link className={`btn btn-primary`} to={`detail/${props.producto.id}`}>Ver Detalle</Link>
        </div>
        </div>
    )
}
export default Item