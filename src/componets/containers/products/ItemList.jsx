import Item from './Item';
import Loading from '../../Loading';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query,where} from 'firebase/firestore'


import { useState,useEffect } from 'react'


const ItemList = () => {
    let params = useParams();
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    //const [queryProductsFilter, setQueryFilter] = '';
    let queryProductsFilter ="";
    useEffect(() => {
      const db = getFirestore();
      const queryProducts = collection(db,'productos');
      params.cat ? queryProductsFilter = query(queryProducts,where('categoria','==',params.cat)):queryProductsFilter = queryProducts;
      getDocs(queryProductsFilter).then(
        resp => {
          //console.log(resp);
        setProducts( resp.docs.map(prod=>({id:prod.id,...prod.data()})));  
      }).catch((err) => { console.log(err) })
      .finally((resp) => {
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