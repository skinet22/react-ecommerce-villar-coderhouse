import './Navbar.css'

const NavBar = ({view}) => {
    
    if(view=="Home"){
        let active = "active";
    }else{
        let active = "";
    }
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
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Software</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hardware
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Almacenamiento </a></li>
                        <li><a className="dropdown-item" href="#">Memorias</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Promociones</a></li>
                    </ul>
                    </li>
                    
                </ul>
                
                </div>
            </div>
            </nav>
     
        

        
    )


}
export default NavBar
