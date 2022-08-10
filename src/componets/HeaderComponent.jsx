import logo from '../logo.svg'
import './Navbar.css'
import CartWidget from './CartWidget'
const HeaderComponent = () => {
    return (
        //Customiza tu navBar como Prefieras
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3" id="header">
                        <h3>E-Venta</h3> <img src={logo}  />
                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="form-control" placeholder="Buscar"/>
                    </div>
                    <div className="col-lg-3 carrito" >
                        <CartWidget/>
                    </div>
                </div>    
            </div>
        </header>
    )
}
export default HeaderComponent
