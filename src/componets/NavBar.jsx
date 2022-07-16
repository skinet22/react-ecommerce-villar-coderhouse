import './Navbar.css'
import { NavLink,useParams  } from "react-router-dom";

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
                            <NavLink className={({isActive})=>isActive ? 'nav-link active' :  'nav-link'} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? 'nav-link active' :  'nav-link'} to="/categorias/remeras">Remeras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? 'nav-link active' :  'nav-link'} to="/categorias/sueters">Suerters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? 'nav-link active' :  'nav-link'} to="/categorias/pantalones">Pantalones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>isActive ? 'nav-link active' :  'nav-link'} to="/categorias/zapatillas">Zapatillas</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
            </nav>
     
        

        
    )


}
export default NavBar
