import TituloSeccion from './TituloSeccion'
import ItemList from './products/ItemList'
const ItemListContainer = ({listado, titulo}) => {
    return (
        <div>
            <TituloSeccion titulo={titulo}/>
            <ItemList/>
        </div>
    )
}
export default ItemListContainer