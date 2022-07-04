import Item from './Item';
import { useState,useEffect } from 'react'


const ItemList = () => {
    const [productos, setProducts] = useState([]);
    const [bolean, setBoleans] = useState(true);
    let i =0;

    useEffect(() => {
        //let bolean = true;
        if (bolean) {
            setTimeout(function(){
                fetch('assets/DataProducts.json')
                .then((response) => response.json())
                .then((data) => {
                  i++;
                  setProducts(data);
                  setBoleans(!bolean);

                })
                .finally((res) => {
                  console.log('Termino la carga ' + bolean);
                  
                });
            }, 3000);

        } else {
          console.log('Rechazado 404');
        }
      }, [bolean]);


    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    //una callback es una funcion pasada por parametro
    return (
        <section id="ProductosDestacados">
            <div className="row">
            <div ClassName="cargando" style={bolean ? {} : { display: 'none' }}>Cargando...{bolean}</div>
            {productos.map(prod => <Item producto={prod} key={prod.id}/>
            )}
            </div>
        </section>
    )
}
export default ItemList