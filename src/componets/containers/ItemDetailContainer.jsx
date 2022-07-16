import { useState,useEffect } from 'react'
import { Link,useParams  } from "react-router-dom";
import Loading from '../Loading';
import ItemCount from './products/ItemCount';

const ItemDetailContainer = () => {
    let params = useParams();
    const [prod, setProduct] = useState([]);
    const [bolean, setBoleans] = useState(true);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        //let bolean = true;
        if (bolean) {
                fetch('../../assets/DataProducts.json')
                .then((response) => response.json())
                .then((data) => {
                  let p = data.filter(data => data.id == params.id);
                  p=p[0];
                  setProduct(p);
                  setBoleans(!bolean);
                })
                .finally((res) => {
                    setLoading(false)
                  
                });
            

        } else {
          console.log('Rechazado 404');
        }
        
      }, [bolean]);
      

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
                        <ItemCount stock={prod.stock}/>
                                 
                    </div>
                </div>       
            </div> 
            
            
        }



                   
        </>
        
    )
}
export default ItemDetailContainer