import './Navbar.css'
import { Link,useParams  } from "react-router-dom";

const NavBar = ({view}) => {
    let params = useParams();
    let catr ="";
    let catp ="";
    let cats ="";
    let catpr ="";
     (params.categoria=="remeras") ? catr="active" : catr="";
     (params.categoria=="pantalones") ? catp="active" : catp="";
     (params.categoria=="sueters") ? cats="active" : cats="";
     (params.categoria=="promociones") ? catpr="active" : catpr="";
 
   
    return (
        //Customiza tu navBar como Prefieras
     
        <nav className="navbar navbar-expand-lg navbar-light" id="menu">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${catr}`} to="/categorias/remeras">Remeras</Link>
                        </li>
                        <li className="nav-item dropdown">
                        
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vestimenta</Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className={`dropdown-item ${cats}`} to="/categorias/sueters">Sueters</Link></li>
                            <li><Link className={`dropdown-item ${catp}`} to="/categorias/pantalones">Pantalones</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className={`dropdown-item ${catpr}`} to="/">Promociones</Link></li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
     
        

        
    )


}
export default NavBar
