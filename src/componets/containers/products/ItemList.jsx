import Item from './Item';
import Loading from '../../Loading';
import { useParams  } from "react-router-dom";


import { useState,useEffect } from 'react'


const ItemList = () => {
    let params = useParams();
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
                fetch('../assets/DataProducts.json')
                .then((response) => response.json())
                .then((data) => {
                  params.cat ? setProducts(data.filter(data => data.categoria == params.cat)) : setProducts(data);
                }).catch((err) => { console.log(err) })
                .finally((res) => {
                  setLoading(false)
                });
            
      }, [params.cat]);


    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    //una callback es una funcion pasada por parametro
    return (


        <section id="ProductosDestacados">
            <div className="row">
            { 
              loading ? <Loading/> :  
              productos.map(prod => <Item producto={prod} key={prod.id}/>)
            }
              
              
            </div>
        </section>

         
    )
}
export default ItemList