import TituloSeccion from './TituloSeccion'
import ItemList from './products/ItemList'


const ItemListContainer = ({listado, titulo}) => {

    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    //una callback es una funcion pasada por parametro
    return (

        <div>
            <TituloSeccion titulo={titulo}/>
            <ItemList/>
        </div>
    )
}
export default ItemListContainer