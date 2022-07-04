
const Item = (props) => {
    return (

        <div key={props.producto.id} id={props.producto.id} className="card col-lg-3" >
        <img className="card-img-top" src={props.producto.img} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.producto.nombre}</h5>
            <p className="card-text">{props.producto.descripcion}</p>
            <a href="#" className="btn btn-primary">{props.producto.precio}</a>
        </div>
        </div>
    )
}
export default Item