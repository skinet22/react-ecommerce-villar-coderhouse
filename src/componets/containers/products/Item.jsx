
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (

        <div key={producto.id} id={producto.id} className="card col-lg-3" >
        <img className="card-img-top" src={producto.img} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <i className="btn btn-danger">$ {producto.precio}</i>
            <br></br>
            <Link className={`btn btn-primary`} to={`/detail/${producto.id}`}>Ver Detalle</Link>
        </div>
        </div>
    )
}
export default Item