import TituloSeccion from './TituloSeccion'
const ItemListContainer = ({listado, titulo}) => {
    //Incluye aquí el rendering de algun texto o titulo provisional que luego remplazaremos por nuestro catalogo
    return (

        <div>
            <TituloSeccion titulo={titulo}/>

            {listado}
        </div>
    )
}
export default ItemListContainer